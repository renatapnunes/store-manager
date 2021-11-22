const express = require('express');
const error = require('./middlewares/error');
const route = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(route);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
