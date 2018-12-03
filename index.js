const express = require('express');
const app = express();

const upload = require('./routers/upload');
const pdf = require('./routers/pdf');
const image = require('./routers/image');

app.use(express.static('views'));
app.use(express.static('uploads'));
app.use('/upload', upload);
app.use('/pdf', pdf);
app.use('/images', image);

app.listen(3000, () => console.log('Example app listening on port 3000!'));