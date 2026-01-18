const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { mensaje } = req.query;

    const hora = `${req.hora.toString().padStart(2, '0')}:${req.minutos
        .toString()
        .padStart(2, '0')}`;

    res.send(`
        <h1>Bienvenido a la página principal</h1>
        <p>Hora actual: ${hora}</p>

        ${mensaje ? `<p style="color:red;">${mensaje}</p>` : ''}

        <a href="/endroute">
            <button>Ir a endroute</button>
        </a>
    `);
});

module.exports = router;
