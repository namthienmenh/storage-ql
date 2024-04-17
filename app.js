var express = require('express');
var path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path:'.env' });
const indexRouter = require('./routes/index');
const weather = require('./routes/weather');
const logger = require("./utils/logger");

const app = express();
app.use(require('./utils/response/responseHandler'));
// const httpServer = require('http').createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/weather', weather);

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(`${err.status || 500} - ${req.originalUrl} - ${req.method} - ${req.ip} ${err} ${err.stack}`);
    res.status(err.status || 500).json({ error: err.message });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
});

