// folder modules/motor.js
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
        console.log(this.#motors);
        res.send(JSON.stringify(this.#motors))
    }

    handleGetMotor(req, res){
        const motor = this.#motors.find(el => el.id == req.params.id);
        res.send(JSON.stringify(motor))
    }

    // karena menggunakan method selain GET harus di coba di postman
    handleCreateMotor(req, res){
        const motors = this.#motors
        req.body.id = motors[motors.length - 1].id + 1;
        this.#motors.push(req.body);
        res.send(JSON.stringify('Data Ditambahkan!'))
    }

    // karena menggunakan method selain GET harus di coba di postman
    handleUpdateMotor(req, res){
        // menggunakan req.params.id & req.body
        console.log(req.params.id, req.body)
        // menemukan index dari data motor berdasarkan id contoh ada di handleDeleteMotor
        // gunakan index tersebut untuk mereplace data this.#motors by id dengan req.body
    }

    // karena menggunakan method selain GET harus di coba di postman
    handleDeleteMotor(req, res){
        const index = this.#motors.findIndex(el => el.id == req.params.id);
        console.log(index);
        this.#motors.splice(index, 1)
        console.log(this.#motors);
        res.send('Data Deleted!');
    }

}

module.exports = Motor;