import Sequelize, { Model } from "sequelize";

class Profession extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )
  }
}

export default Profession;