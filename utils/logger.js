const winston = require('winston');
require('winston-daily-rotate-file');
const TelegramLogger = require('winston-telegram')
const { combine, timestamp, printf, colorize, align, json, errors } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
    filename: 'logs/combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
});

const telegramTransport = new TelegramLogger({
    level: 'error',
    token: process.env.TELEGRAM_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
});

const errorFilter = winston.format((info, opts) => {
    return info.level === 'error' ? info : false;
});

const errorTransport = new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format: combine(
        align(),
        printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    )
});


// Configure Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: combine(
        errors({ stack: true }),
        timestamp({format: 'YYYY-MM-DD hh:mm:ss.SSS A'}),
        json()
    ),
    defaultMeta: { service: 'weather-api' },
    transports: [
        new winston.transports.Console({
            format: combine(
                colorize({ all: true }),
                align(),
                printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
            )
        }),
        fileRotateTransport,
        errorTransport,
        telegramTransport
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exception.log' }),
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: 'rejections.log' }),
    ],
});

module.exports = logger

