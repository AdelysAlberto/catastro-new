import BaseController from './base.controller';

import { OperacionService } from '../services';

class OperacionController extends BaseController {
    constructor() {
        super(OperacionService);
    }
}

module.exports = new OperacionController();
