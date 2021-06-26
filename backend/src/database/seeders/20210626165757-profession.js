module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("profession", [{
        description: "Professor(a)",
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("profession", {
      where: {
        description: "Professor(a)",
      }
    }, {})
  }
}