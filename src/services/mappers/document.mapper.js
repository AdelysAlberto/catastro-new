class DocumentMapper {
  documentDbMapper(document) {
    const { id, operacion, fkOperacion, fkPersona, fkTipoUso, descripcion } = document;
    return {
      id,
      operacion,
      fkOperacion,
      fkPersona,
      fkTipoUso,
      descripcion
    };
  }

  documentDomainMapper(document) {
    const {
      id,
      operacion,
      fkOperacion,
      Persona: { cedula, nombre, telefono },
      fkTipoUso,
      descripcion
    } = document;
    return {
      id,
      operacion,
      fkOperacion,
      Persona: { cedula, nombre, telefono },
      fkTipoUso,
      descripcion
    };
  }
}

module.exports = DocumentMapper;
