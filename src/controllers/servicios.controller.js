import BaseController from './base.controller';

import { ServicioService } from '../services';

class ServicioController extends BaseController {
    constructor() {
        super(ServicioService);
    }
}

module.exports = new ServicioController();
