class PersonaMapper {
    userDbMapper(person) {
        const {
            cedula,
            nombre,
            telefono,
            direccion,
            claveCatastral,
            fkUser,
            fkStatus,
        } = person;
        return {
            cedula,
            nombre,
            telefono,
            direccion,
            claveCatastral,
            fkUser,
            fkStatus,
        };
    }

    personDomainMapper(person) {
        const { cedula, nombre, claveCatastral } = person;
        return { cedula, nombre, claveCatastral };
    }
}


module.exports = PersonaMapper;
