import regex from "../Tools/validacion";
import opciones from "../Tools/opciones";
import categoria from "../Model/modelo_categoria";

export const getCategorias = async (req, res) => {
    try {
        opciones.page = numero(req.query.page) || 1;
        opciones.limit = numero(req.query.limit) || 12;
        const Categorias = await categoria.paginate({eliminado : false} , opciones);
        res.status(200).json(Categorias);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const getCategoria = async (req, res) => {
    try {
    const categoria = await categoria.paginate({id : req.params.id, eliminado : false}, opciones);
    res.status(200).json(categoria);
} catch (error) {
    res.status(404).json({ error : error.message});
}
}

export const postCategoria = async (req, res) => {
    try {
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(500) .json({ error : "El nombre no es valido" });
        }
        const Categoria = new categoria(req.body);
        await categoria.save();
        res.status(200).json(Categoria);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const editarCategoria = async (req, res) => {
    try{
        req.body.fechaActualizacion = Date.now();
        if (!regex.nombre.test(req.body.nombre)){
            return res.status(500).json({ error : "El nombre no es valido" });
        }
        const categoria = await categoria.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, req.body, {new : true});
        const categoria_paginate = await categoria_paginate.paginate({id : req.params.id, eliminado : false}, opciones);
        res.status(200).json(categoria_paginate);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}

export const deleteCategoria = async (req, res) => {
    try{
        req.body.eliminado = true;
        const Categoria = await Categoria.findByIdAndUpdate({ _id : req.params.id, eliminado : false}, {eliminado : true, fechaEliminacion : Date.now()}, {new : true});
        const categoria_paginate = await categoria_paginate.paginate({id : req.params.id, eliminado : false}, opciones);
        res.status(200).json(categoria_paginate);
    } catch (error) {
        res.status(404).json({ error : error.message});
    }
}