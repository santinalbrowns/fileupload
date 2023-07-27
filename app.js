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

app.listen(3000, () => {
  console.log('Listening on port 3000');
});