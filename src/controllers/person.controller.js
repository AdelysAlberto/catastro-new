const personService = require("../services/person.service");

class PersonController {
  async getPerson(req, res) {
    const { id } = req.params;
    let user;
    if (!id) {
      user = await personService.getPerson();
    } else {
      user = await personService.getPersonBy("cedula", id);
    }
    if (user) {
      res.send(user);
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  }

  async getPersonByName(req, res) {
    try {
      const { name } = req.params;
      let user;
      if (!name) {
        res.status(404).json({ msg: "User not found" });
      } else {
        user = await personService.getPersonBy("nombre", name);
      }
      const response = { success: true, payload: user };
      res.send(response);
    } catch (error) {
      const { message, statusCode = 400 } = error;
      const errorResp = { success: false, message };
      res.status(statusCode).json(errorResp);
    }
  }

  async getPersonByCedula(req, res) {
    try {
      const { cedula } = req.params;
      const user = await personService.getPersonBy("cedula", cedula);
      const response = { success: true, payload: user };
      res.send(response);
    } catch (error) {
      const { message, statusCode = 400 } = error;
      const errorResp = { success: false, message };
      res.status(statusCode).json(errorResp);
    }
  }

  async createPerson(req, res) {
    try {
      const { body } = req;
      const user = await personService.createPerson(body);
      const response = { success: true, payload: user };
      res.send(response);
    } catch (error) {
      const { message, statusCode } = error;
      const errorResp = { success: false, message };
      res.status(statusCode).json(errorResp);
    }
  }

  async updatePerson(req, res) {
    const { body } = req;
    const user = await personService.updatePerson(body);
    res.send(user);
  }

  async deletePerson(req, res) {
    const { body } = req;
    const user = await personService.createUser(body);
    res.send(user);
  }
}

module.exports = new PersonController();
