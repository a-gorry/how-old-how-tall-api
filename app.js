const express = require('express');
const app = express();
const router = require('./routes/router');
const bodyParser = require('body-parser');

const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));