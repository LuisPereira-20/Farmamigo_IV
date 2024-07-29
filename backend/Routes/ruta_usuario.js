import { router } from "express";
const router  = router();   

import { getUsuarios, getUsuario, postUsuario, Actualizar_Usuario, Eliminar_Usuario} from "../Controller/Controlador_usuario.js";

router.get("/usuarios",  getUsuarios);
router.get("/usuarios/:id",  getUsuario);
router.post("/usuarios",  postUsuario);
router.patch("/usuarios/:id",  Actualizar_Usuario);
router.delete("/usuarios/:id",  Eliminar_Usuario);

export default router