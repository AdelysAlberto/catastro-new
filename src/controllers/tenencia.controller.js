import BaseController from './base.controller';

import { TenenciaService } from '../services';

class TenenciaController extends BaseController {
    constructor() {
        super(TenenciaService);
    }
}

module.exports = new TenenciaController();
