const express = require('express')
const multer = require('multer');
//const upload = multer({ dest: 'uploads/' })

const app = express()
const port = 3000

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, 'data.csv');

    },
  });


const upload = multer({

    storage: storage,
    limits: {
        fileSize: 10000000 // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
  // upload only csv
        if (!file.originalname.match(/\.(csv)$/)) { 
            return cb(new Error('Please upload a csv'))
        }
        cb(undefined, true)
    }
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  


  app.post('/profile', upload.single('data'), function (req, res, next) {
    // req.file is the `data` file
    // req.body will hold the text fields, if there were any
    try {
        // req.file is the `fileUpload` file
        // req.body will hold the text fields, if there were any
    
        // handle success
        return res.status(200).json({ message: 'File uploaded successfully!' });
      } catch (error) {
        // handle error
        return res.status(400).json({ message: error.message });
      }
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})