import BaseController from './base.controller';

import { OcupanteService } from '../services';

class OcupanteController extends BaseController {
    constructor() {
        super(OcupanteService);
    }
}

module.exports = new OcupanteController();
