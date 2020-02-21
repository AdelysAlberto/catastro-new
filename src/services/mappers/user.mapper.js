class UserMapper {
    userDbMapper(user) {
        const {
            dni,
            cuil,
            name,
            lastname,
            email,
            password,
            fkRole,
            address,
            fkCity,
            fkCountry,
            phone,
            mobile,
            photo,
            fkStatus,
        } = user;
        return {
            dni,
            cuil,
            name,
            lastname,
            email,
            password,
            fkRole,
            address,
            fkCity,
            fkCountry,
            phone,
            mobile,
            photo,
            fkStatus,
        };
    }

    userDomainMapper(user) {
        const { name, lastname } = user;
        return { name, lastname };
    }
}


module.exports = UserMapper;
