module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("professionals", {
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
      professionId: {
        field: "profession_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "professions",
          key: "id"
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface) => queryInterface.dropTable("professionals"),
};
