const { cloudinaryConfig, uploader } = require('../helper/cloudinary')
const { dataUri } = require('../helper/multer')

class Uploads{
    handleUpload(req, res){
        const file = dataUri(req);
        let url = ''
        console.log(file);
        uploader.upload(file, (err, result) => {
            if(err){
                console.log(err)
                throw new Error('Gagal Upload!');
            }

            res.send(result.url)
        })
    }
}

module.exports = Uploads;