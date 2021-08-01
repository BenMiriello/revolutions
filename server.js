const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/')));

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(3000, () => console.log('token server running on 3000'));
