const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/tommy', function(req, res) {
    res.json({nom: 'tommy', age: 5})
})

app.listen(9000);