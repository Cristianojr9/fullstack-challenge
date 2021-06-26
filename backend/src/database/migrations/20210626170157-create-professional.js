module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("professional", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      }, 
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      typeProfession: {
        field: "profession_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "profession",
          key: "id"
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface) => queryInterface.createTable("professional"),
};
