import BaseService from "./base.service";
import db from "../dal/models";
import CatastroException from "../config/custom-exception";

const md5 = require("md5");

const { personMapper } = require("./mappers");

const { Persona, Sequelize } = db;
const { Op } = Sequelize;

class PersonService extends BaseService {
  async getPerson() {
    const getPersona = await Persona.findAll();
    const persona = getPersona.map(personMapper.personDomainMapper);
    return {
      status: 200,
      payload: persona
    };
  }

  async getPersonBy(field, value) {
    let query;
    if (field === "cedula") {
      query = await Persona.findOne({
        where: { [field]: value }
      });
    } else {
      query = await Persona.findAll({
        where: { [field]: { [Op.like]: `%${value}%` } }
      });
    }
    if (!query) {
      throw new CatastroException("Persona no registrada");
    }
    const user = Array.isArray(query) ? query.map(data => personMapper.personDomainMapper(data)) : personMapper.personDomainMapper(query);
    return {
      status: 200,
      message: "success",
      payload: user
    };
    d;
  }

  async createPerson(user) {
    const today = String(new Date());
    const claveCatastral = md5(today).substring(0, 10);
    user.claveCatastral = claveCatastral;
    user.fkUser = 1;
    user.fkStatus = 1;
    const userMapped = await personMapper.userDbMapper(user);
    return Persona.create(userMapped)
      .then(result => personMapper.personDomainMapper(result))
      .catch(err => {
        throw new CatastroException("Esta persona ya se encuentra en sistema");
      });

    /* if (!persona) {
    console.log('result');
    return { message: 'Error al crear usuario', statusCode: 400 };
  }
  console.log('pasa el service');
  return persona; */
  }

  async updatePerson(user) {
    return user;
  }

  async deletePerson(user) {
    const userMapped = personMapper.userDbMapper(user);
    const deleteUser = await Persona.create(userMapped);
    return deleteUser;
  }
}

module.exports = new PersonService();
