import BaseController from "./base.controller";

import { DocumentoService } from "../services";

class DocumentoController extends BaseController {
  constructor() {
    super(DocumentoService);
  }

  async getDocuments(req, res) {
    const user = await DocumentoService.getAllDocuments();
    if (user) {
      res.send(user);
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  }

  async getDocumentByNumero(req, res) {
    const { numero } = req.params;
    let user;
    if (!numero) {
      res.status(404).json({ msg: "User not found" });
    } else {
      user = await DocumentoService.getPersonBy("numero", numero);
    }
    if (user) {
      res.send(user);
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  }

  async getDocumentByCedula(req, res) {
    const { id } = req.params;
    let user;
    if (!id) {
      user = await DocumentoService.getPerson();
    } else {
      user = await DocumentoService.getPersonBy("cedula", id);
    }
    if (user) {
      res.send(user);
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  }
}

module.exports = new DocumentoController();
