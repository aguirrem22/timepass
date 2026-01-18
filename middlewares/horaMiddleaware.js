module.exports = (req, res, next) => {
    const now = new Date();

    req.hora = now.getHours();
    req.minutos = now.getMinutes();
    req.fechaCompleta = now;

    next();
};
