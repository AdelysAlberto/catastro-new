import express from "express";

const { DatosConstruccionController, ComplementoController } = require("../controllers");
import DocumentoController from "../controllers/documento.controller";

const router = new express.Router();

router.get("/datos-construccion/:id?", DatosConstruccionController.get.bind(DatosConstruccionController));
router.get("/documento", DocumentoController.getDocuments);
router.get("/documento/numero/:numero", DocumentoController.getDocumentByNumero);
router.get("/documento/cedula/:cedula", DocumentoController.getDocumentByCedula);
router.get("/complemento/:id?", ComplementoController.get.bind(ComplementoController));

module.exports = router;
