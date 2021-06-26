import Sequelize from "sequelize";

import Professional from "../app/models/Professional";
import Profession from "../app/models/Profession";

import databaseConfig from "../config/database";

const models = [Professional, Profession];

class Database { 
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => )
  }
}

export default new Database();