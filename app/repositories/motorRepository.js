const { Motor } = require("../models");

module.exports = {
  create(createArgs) {
    return Motor.create(createArgs);
  },

  update(id, updateArgs) {
    return Motor.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return Motor.destroy(id);
  },

  find(id) {
    return Motor.findByPk(id);
  },

  findAll() {
    return Motor.findAll();
  },

  getTotalMotor() {
    return Motor.count();
  },
};
