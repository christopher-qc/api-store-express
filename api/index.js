const express = require("express");
const cors = require('cors')
const routerApi = require("./routes");

const { logErrors, errorHandler, boomErrorHandler } = require("./middlewares/error.handler")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// EJEMPLO DE PERMITIR A WWEBSITES

// const whiteList = ['http://localhost:3000', 'https://myapp.com'];
// const options = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'))
//     }
//   }
// }

// app.use(cors(options))

app.use(cors())

app.get('/api', (req, res) => {
  res.send('Hola mi server')
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);


app.listen(port, () => {
  console.log('Running....');
});
