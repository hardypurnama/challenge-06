const db = require("../../../../config/db");

module.exports = {
  handleGetMobils(req, res) {
    db.query("SELECT * FROM `mobil`", function (err, results, fields) {
      console.log(results);
      res.json(results);
    });
  },
  handleGetMobil(req, res) {
    db.query(
      "SELECT * FROM `mobil` where id=?",
      [req.params.id],
      function (err, results, fields) {
        console.log(results);
        res.json(results);
      }
    );
  },

  handleCreateMobil(req, res) {
    db.query(
      `INSERT INTO mobil (nama, sewaperhari, ukuran, foto) 
            VALUES (?, ?, ?, ?)`,
      [req.body.nama, req.body.sewaperhari, req.body.ukuran, req.body.foto],
      function (err, results, fields) {
        console.log(err, results);
        res.json("Data Ditambahkan!");
      }
    );
  },

  handleUpdateMobil(req, res) {
    db.query(
      `UPDATE mobil SET nama=?, transmisi=?, manufaktur=?, tgl_pembuatan=?, foto=?, harga_sewa=?, updated_by=? where id=?`,
      [
        req.body.nama,
        req.body.sewaperhari,
        req.body.ukuran,
        req.body.foto,
        req.params.id,
      ],
      function (err, results, fields) {
        console.log(results);
        res.json("Data di update");
      }
    );
  },
  handleDeleteMobil(req, res) {
    db.query(
      "DELETE FROM `mobil` where id=?",
      [req.params.id],
      function (err, results, fields) {
        console.log(results);
        res.json("Data terhapus");
      }
    );
  },
};
