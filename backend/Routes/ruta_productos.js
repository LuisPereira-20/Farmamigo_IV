import { Router } from "express";
const router = Router();
import { getProductos, getProducto, postProducto, Actualizar_Producto, Eliminar_Producto} from "../Controller/Controlador_producto.js";

router.get("/productos",  getProductos);
router.get("/productos/:id",  getProducto);
router.post("/productos",  postProducto);
router.patch("/productos/:id",  Actualizar_Producto);
router.delete("/productos/:id",  Eliminar_Producto);

export default router;