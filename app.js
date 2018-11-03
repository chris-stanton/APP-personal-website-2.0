
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;


//Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Handle index file separately
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '.public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
