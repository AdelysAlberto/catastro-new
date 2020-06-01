import express from "express";
import PersonController from "../controllers/person.controller";

const router = new express.Router();

router.get("/person/cedula/:cedula", PersonController.getPersonByCedula);
router.get("/person/name/:name", PersonController.getPersonByName);
router.post("/person", PersonController.createPerson);
router.put("/person", PersonController.updatePerson);
router.delete("/person", PersonController.deletePerson);

module.exports = router;
