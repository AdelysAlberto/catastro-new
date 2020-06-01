import UserMapper from "./user.mapper";
import PersonMapper from "./person.mapper";
import DocumentMapper from "./document.mapper";

module.exports = {
  userMapper: new UserMapper(),
  personMapper: new PersonMapper(),
  DocumentMapper: new DocumentMapper()
};
