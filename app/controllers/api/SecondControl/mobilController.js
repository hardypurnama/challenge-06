const mobilService = require("../../../services/mobilService");

module.exports = {
  list(req, res) {
    mobilService
      .list()
      .then(({ data, count }) => {
        res.status(200).json({
          status: "sukses",
          data: { mobils: data },
          meta: { total: count },
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "Gagal",
          message: err.message,
        });
      });
  },

  create(req, res) {
    mobilService
      .create(req.body)
      .then((mobil) => {
        res.status(201).json({
          status: "Sukses",
          data: mobil,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "Gagal",
          message: err.message,
        });
      });
  },

  update(req, res) {
    mobilService
      .update(req.params.id, req.body)
      .then(() => {
        res.status(200).json({
          status: "Sukses",
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "Gagal",
          message: err.message,
        });
      });
  },

  show(req, res) {
    mobilService
      .get(req.params.id)
      .then((mobil) => {
        res.status(200).json({
          status: "Sukses",
          data: mobil,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "Gagal",
          message: err.message,
        });
      });
  },

  destroy(req, res) {
    mobilService
      .delete(req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        res.status(422).json({
          status: "Gagal",
          message: err.message,
        });
      });
  },
};
