import UserService from './user.service';
import PersonService from './person.service';

module.exports = {
    UserService: new UserService(),
    PersonService: new PersonService(),
};
