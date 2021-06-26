import Sequelize, { Model } from "sequelize";

class Profession extends Model {
  static init(sequelize, freezeTableName, timestamps) {
    super.init(
      {
        description: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        freezeTableName,
        timestamps,
      }
    )
  }
}

export default Profession;