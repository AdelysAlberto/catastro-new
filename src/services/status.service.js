import BaseService from './base.service';

class StatusService extends BaseService {
    constructor() {
        super('Status');
    }
}

module.exports = new StatusService();
