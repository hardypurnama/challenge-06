const motorRepository = require("../repositories/motorRepository");

module.exports = {
  create(requestBody) {
    return motorRepository.create(requestBody);
  },

  update(id, requestBody) {
    return motorRepository.update(id, requestBody);
  },

  delete(id) {
    return motorRepository.delete(id);
  },

  async list() {
    try {
      const motors = await motorRepository.findAll();
      const motorCount = await motorRepository.getTotalMotor();

      return {
        data: motors,
        count: motorCount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return motorRepository.find(id);
  },
};
