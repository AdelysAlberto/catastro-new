import BaseController from './base.controller';

import { FormaService } from '../services';

class FormaController extends BaseController {
    constructor() {
        super(FormaService);
    }
}

module.exports = new FormaController();
