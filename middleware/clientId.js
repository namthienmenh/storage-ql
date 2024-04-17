const clientIdMiddleware = (req, res, next) => {
    if (!req.headers.client_id) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    next();
};

module.exports = clientIdMiddleware;