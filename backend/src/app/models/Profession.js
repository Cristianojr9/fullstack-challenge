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

    return this;
  }
}

export default Profession;