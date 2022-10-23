const authService = require("../../../services/authService");

module.exports = {
  register(req, res) {
    authService
      .register(req.body)
      .then((user) => {
        res.status(201).json({
          status: "Sukses",
          data: user,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "Gagal",
          message: err.message,
        });
      });
  },
};
