class PersonaMapper {
  userDbMapper(person) {
    const { cedula, nombre, telefono, direccion, claveCatastral, fkUser, fkStatus } = person;
    return {
      cedula,
      nombre,
      telefono,
      direccion,
      claveCatastral,
      fkUser,
      fkStatus
    };
  }

  personDomainMapper(person) {
    const { cedula, nombre, claveCatastral, direccion, telefono } = person;
    return {
      cedula,
      nombre,
      direccion,
      claveCatastral,
      telefono
    };
  }
}

module.exports = PersonaMapper;
