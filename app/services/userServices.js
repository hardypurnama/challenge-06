const usrRepo = require("../repositories/usrRepo");

module.exports = {
  create(requestBody) {
    return usrRepo.create(requestBody);
  },

  update(id, requestBody) {
    return usrRepo.update(id, requestBody);
  },

  delete(id) {
    return usrRepo.delete(id);
  },

  async list() {
    try {
      const users = await usrRepo.findAll();
      const userCount = await usrRepo.getTotalUser();

      return {
        data: users,
        count: userCount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return usrRepo.find(id);
  },
};
