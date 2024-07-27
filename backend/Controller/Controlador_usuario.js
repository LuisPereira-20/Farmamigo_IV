import bcrypt from "bcrypt";
import Usuario from "../Model/modelo_usuario.js";
import rol from "../Model/modelo_rol.js";
import regex from "../Tools/validacion.js";
import opciones from "../Tools/opciones.js";

export const registrar = async (req, res) => {
    const { nombre, apellido, correo, contrasenia, rol } = req.body;
    const contrasenia_encriptada = await bcrypt.hash(contrasenia, 10);
    const usuario = new Usuario({ nombre, apellido, correo, contrasenia: contrasenia_encriptada, rol });
    await usuario.save();
    res.json({ message: "Usuario registrado exitosamente" });
}