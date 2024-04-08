// winston.js

const winston = require('winston');

// Define log levels and corresponding colors
const logLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        debug: 3
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        debug: 'blue'
    }
};

// Configure Winston logger
const logger = winston.createLogger({
    levels: logLevels.levels,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console({
            level: 'debug', // Log level for console output
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        // Add more transports if needed, e.g., file transport
        // new winston.transports.File({ filename: 'error.log', level: 'error' })
    ]
});

module.exports = logger;
