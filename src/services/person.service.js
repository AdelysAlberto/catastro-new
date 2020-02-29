import db from '../dal/models';

const md5 = require('md5');


const { personMapper } = require('./mappers');

const { Persona } = db;
class PersonService {
    async getPerson() {
        const getPersona = await Persona.findAll();
        const persona = getPersona.map(personMapper.personDomainMapper);
        return ({
            status: 200,
            payload: persona,

        });
    }

    async getPersonBy(field, id) {
        const getPersona = await Persona.findOne({
            where: { [field]: id },
        });
        if (getPersona) {
            const user = personMapper.personDomainMapper(getPersona);
            return ({
                status: 200,
                message: 'success',
                payload: user,
            });
        }
        return false;
    }

    async createPerson(user) {
        const today = String(new Date());
        const claveCatastral = md5(today).substring(0, 10);
        const userMapped = personMapper.userDbMapper(user);
        const createdUser = await Persona.create(userMapped);
        return createdUser;
    }

    async updatePerson(user) {
        return user;
    }

    async deletePerson(user) {
        const userMapped = personMapper.userDbMapper(user);
        const deleteUser = await Persona.create(userMapped);
        return deleteUser;
    }
}

module.exports = new PersonService();
