import BaseController from './base.controller';

import { TopografiaService } from '../services';

class TopografiaController extends BaseController {
    constructor() {
        super(TopografiaService);
    }
}

module.exports = new TopografiaController();
