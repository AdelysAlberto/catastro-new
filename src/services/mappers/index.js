import UserMapper from './user.mapper';
import PersonMapper from './person.mapper';

module.exports = {
    userMapper: new UserMapper(),
    personMapper: new PersonMapper(),
};
