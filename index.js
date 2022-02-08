const express = require("express");
const app = express(); 
const path = require("path");
const multer = require("multer")
 

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const routes = require("./routes.js")

app.set('view engine', 'ejs');
app.set('views', 'views');

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, 'post_' + file.originalname);
  }
});

app.use(multer({ storage: storage}).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')))


app.use(express.static(path.join(__dirname, 'public')));

const connection = require("./config/connection");
const console = require("console");


app.use(routes);


//tela de erro
app.use((req, res) => {
  res.status(404).send('<h1>Pagina nao encontrada</h1>')
})

connection.sync().then(result =>{
  //console.log(result);
  app.listen(3000);
}).catch(error => {
  console.log(error)
})
