const express = require('express');
const routerApi = require('./routes');
const router = require('./routes/products.router');

const app = express();
const port = 8000;

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



//

// app.get('/details/:productId', (req, res) => {
//   res.json({
//     productId,
//     name: 'Product 2',
//     price: 2500
//   })
// });

// Recogiendo parámtros tipo Query
// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.send('No hay parámteros')
//   }
// });

app.listen(port, () => {
  console.log('Mi servidor se está ejecutando en el puerto: ' + port);
});
