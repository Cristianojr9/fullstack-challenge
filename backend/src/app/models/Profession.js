const { Sequelize } = require("sequelize/types")

class Profession extends Model {
  static define(sequelize) {
    super.define(
      {
        description: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
      },
      {
        sequelize,
      }
    )
  }
}

export default Profession;