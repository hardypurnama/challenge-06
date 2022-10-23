const carRepo = require("../repositories/carRepo");

module.exports = {
  create(requestBody) {
    return carRepo.create(requestBody);
  },

  update(id, requestBody) {
    return carRepo.update(id, requestBody);
  },

  delete(id) {
    return carRepo.delete(id);
  },

  async list() {
    try {
      const mobils = await carRepo.findAll();
      const mobilCount = await carRepo.getTotalMobil();

      return {
        data: mobils,
        count: mobilCount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return carRepo.find(id);
  },
};
