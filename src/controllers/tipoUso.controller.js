import BaseController from './base.controller';

import { TipoUsoService } from '../services';

class TipoUsoController extends BaseController {
    constructor() {
        super(TipoUsoService);
    }
}

module.exports = new TipoUsoController();
