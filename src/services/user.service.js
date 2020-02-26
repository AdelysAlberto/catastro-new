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

    async getUserBy(id) {
        const getUser = await User.findOne({
            where: { id },
        });
        if (getUser) {
            const user = userMapper.userDomainMapper(getUser);
            return ({
                status: 200,
                message: 'success',
                payload: user,
            });
        }
        return false;
    }

    async createUser(user) {
        const userMapped = userMapper.userDbMapper(user);
        const createdUser = await User.create(userMapped);
        return createdUser;
    }

    async updateUser(user) {
        const userMapped = userMapper.userDbMapper(user);
        const updateUser = await User.create(userMapped);
        return updateUser;
    }

    async deleteUser(user) {
        const userMapped = userMapper.userDbMapper(user);
        const deleteUser = await User.create(userMapped);
        return deleteUser;
    }
}

module.exports = UserService;
