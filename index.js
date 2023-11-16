const express = require('express');
const routerApi = require('./routes');
const router = require('./routes/products.router');

const app = express();
const port = 8000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hola, éste es mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.get('/main', (req, res) => {
  res.send('Hola, ésta es mi ruta principal');
});

app.listen(port, () => {
  console.log('Mi servidor se está ejecutando en el puerto: ' + port);
});
