const express = require('Express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

// Upload endspoint

app.post('/upload', (req, res) => {
    if (req.file === null) {
        return res.status(400).json9({ msg: 'No file uploaded' });
    }
    const file = req.file.file;
});

app.listen(5000, () => console.log('Server Started...'));