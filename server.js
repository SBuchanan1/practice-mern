const express = require('Express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

// Upload endpoint

app.post('/upload', (req, res) => {
    if (req.file === null) {
        return res.status(400).json9({ msg: 'No file uploaded' });
    }
    const file = req.file.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });

    });
});

app.listen(3000, () => console.log('Server Started...'));