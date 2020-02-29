import BaseController from './base.controller';

import { DatosTerrenoService } from '../services';

class DatosTerrenoController extends BaseController {
    constructor() {
        super(DatosTerrenoService);
    }
}

module.exports = new DatosTerrenoController();
