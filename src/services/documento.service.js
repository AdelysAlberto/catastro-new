import BaseService from "./base.service";
import db from "../dal/models";
import { DocumentMapper } from "./mappers";

const { Documento, Persona, Sequelize } = db;
const { Op } = Sequelize;

class DocumentoService extends BaseService {
  constructor() {
    super("Documento");
  }

  async getAllDocuments() {
    const query = await Documento.findAll({
      include: [
        {
          model: Persona
        }
      ]
    });
    const documentos = await query.map(doc => DocumentMapper.documentDomainMapper(doc));
    return {
      status: 200,
      message: "success",
      payload: documentos
    };
  }

  async getDocumentBy(field, value) {
    let query;
    if (field === "cedula") {
      query = await Documento.findOne({
        where: { [field]: value }
      });
    } else {
      query = await Documento.findAll({
        where: { [field]: { [Op.like]: `%${value}%` } }
      });
    }
    if (!query) {
      throw new CatastroException("Persona no registrada");
    }
    const user = Array.isArray(query)
      ? query.map(data => documentMapper.personDomainMapper(data))
      : documentMapper.personDomainMapper(query);
    return {
      status: 200,
      message: "success",
      payload: user
    };
    d;
  }
}

module.exports = new DocumentoService();
