const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');
const QA = require('./qa');

const { NODE_ENV } = process.env;

let currentENV = DEVELOPMENT;
if (NODE_ENV === 'production') {
    currentENV = PRODUCTION;
} else if (NODE_ENV === 'qa') {
    currentENV = QA;
}

module.exports = currentENV;
