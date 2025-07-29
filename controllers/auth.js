

const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {

  const {  email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });
    
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El correo ya esta registrado",
      });
    }
      
    usuario = new Usuario(req.body);
    
    //encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    //generar nuestro token JWT
    const token = await generarJWT(usuario.id, usuario.name);

     res.status(201).json({
       ok: true,
       uid: usuario.id,
       name: usuario.name,
      token
  
     });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: "por favor hable con el administrador",
    })
    
  }
  
};

const  loginUsuario = async (req, res = response) => {
    const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con ese email",
      });
    }
    //confirmar los password
    const validPassword = bcryptjs.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }
    //generar nuestro token JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "por favor hable con el administrador",
    });
    
  }

    
};
 
const revalidarToken =  async(req, res = response) => {
  const { uid, name } = req;
  //generar un nuevo JWT y retornarlo en esta peticion

  const token =  await generarJWT(uid, name);
  
  res.json({
    ok: true,
    token
  });
};




module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
};