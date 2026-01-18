const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');
const horaMiddleware = require('./middlewares/horaMiddleaware');

app.use(express.urlencoded({ extended: true }));


app.use(horaMiddleware);


app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
