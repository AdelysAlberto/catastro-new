import db from '../dal/models';

const { userMapper } = require('./mappers');

const { User } = db;
class UserService {
    async getUser() {
        const getUser = await User.findAll();
        const user = getUser.map(userMapper.userDomainMapper);
        return ({
            status: 200,
            payload: user,
        });
    }

    async createUser(user) {
        const userMapped = userMapper.userDbMapper(user);
        const createdUser = await User.create(userMapped);
        return createdUser;
    }
}

module.exports = UserService;
