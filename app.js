const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();

const upload = multer({ dest: 'uploads/' });

// This method will save the binary content of the request as a file.
app.post('/binary-upload', (req, res) => {
  req.pipe(fs.createWriteStream('./uploads/audio' + Date.now() + '.txt'));
  res.end('OK');
});

// This method will save a "photo" field from the request as a file.
app.post('/multipart-upload', upload.single('file'), (req, res) => {
  // You can access other HTTP parameters. They are located in the body object.
  console.log(req.file);
  res.end('OK');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});