import BaseController from './base.controller';

import { DatosConstruccionService } from '../services';

class DatosConstruccionController extends BaseController {
    constructor() {
        super(DatosConstruccionService);
    }
}

module.exports = new DatosConstruccionController();
