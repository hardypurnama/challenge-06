// folder modules/motor.js
const db = require('../helper/db');
class Motor{
    #motors = [
        {
            id: 0,
            nama: 'BEAT Fi',
            transmisi: 'Matic',
            manufaktur: 'Honda',
            tgl_pembuatan: '2022-10-11',
            img: '',
        },
        {
            id: 2,
            nama: 'BEAT STREET',
            transmisi: 'Matic',
            manufaktur: 'Honda',
            tgl_pembuatan: '2022-11-11',
            img: '',
        },
    ];

    constructor(){
    } 

    handleGetMotors(req, res){
        db.query(
            'SELECT * FROM `motor`',
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
              res.send(JSON.stringify(results))
            }
        );
        
    }

    handleGetMotor(req, res){
        // const motor = this.#motors.find(el => el.id == req.params.id);
        db.query(
            'SELECT * FROM `motor` where id=?',
            [req.params.id],
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
              res.send(JSON.stringify(results))
            }
        );
    }

    // karena menggunakan method selain GET harus di coba di postman
    handleCreateMotor(req, res){
        // 'INSERT INTO (nama, manufaktur, tgl_pembuatan) VALUES (?,?,?)'
        // [req.body.nama, req.body.manufaktur, req.body.tgl_pembuatan]
        const motors = this.#motors
        req.body.id = motors[motors.length - 1].id + 1;
        this.#motors.push(req.body);
        res.send('Data Ditambahkan!')
    }

    // karena menggunakan method selain GET harus di coba di postman
    handleUpdateMotor(req, res){
        // menggunakan req.params.id & req.body
        console.log(req.params.id, req.body)
        const index = this.#motors.findIndex(el => el.id == req.params.id);  // menemukan index dari data motor berdasarkan id contoh ada di handleDeleteMotor
        req.body.id = req.params.id; // karena body tidak mempunyai id, tambahkan id yg didapat dari parameter id / req.params.id
        this.#motors[index] = req.body;  // gunakan index tersebut untuk mereplace data this.#motors by id dengan req.body
        res.send('Data Di update dengan id' + req.params.id);
    }

    // karena menggunakan method selain GET harus di coba di postman
    handleDeleteMotor(req, res){
        // const index = this.#motors.findIndex(el => el.id == req.params.id);
        // this.#motors.splice(index, 1)
        // console.log(this.#motors);
        db.query(
            'DELETE FROM `motor` where id=?',
            [req.params.id],
            function(err, results, fields) {
              console.log(results); // results contains rows returned by server
              res.send('Data Deleted!');
            }
        );
    }

}

module.exports = Motor;