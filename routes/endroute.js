const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora');

router.get('/', validarHora, (req, res) => {
    res.send(`
        <h1>Bienvenido, has superado la validación de hora</h1>
        <p>Estás en la ruta: /endroute</p>
    `);
});

module.exports = router;
