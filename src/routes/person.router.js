import express from 'express';
import { PersonController } from '../controllers';

const router = new express.Router();

router.get('/person/:id?', PersonController.getPerson);
router.post('/person', PersonController.createPerson);
router.put('/person', PersonController.updatePerson);
router.delete('/person', PersonController.deletePerson);

module.exports = router;
