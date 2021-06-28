import Sequelize, { Model } from "sequelize";

class Professional extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        professionId: Sequelize.INTEGER,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )
  }
  
  static associate(models) {
    super.belongsTo(models.Profession, {
      as: "Profession",
      foreignKey: "profession_id"
    })
  }
}

export default Professional;