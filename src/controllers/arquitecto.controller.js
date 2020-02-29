import BaseController from './base.controller';

import { ArquitectoService } from '../services';

class ArquitectoController extends BaseController {
    constructor() {
        super(ArquitectoService);
    }
}

module.exports = new ArquitectoController();
