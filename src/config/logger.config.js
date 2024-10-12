const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');
const allowedTransports = [];

// Console Transport
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf((log) => {
        return `${log.timestamp} [${log.level}]: ${log.message}`;
      })
    ),
  })
);

// File Transport
allowedTransports.push(
  new winston.transports.File({
    filename: `${__dirname}/../../logs/error.log`,
  })
);
//MongoDB Transport
allowedTransports.push(
  new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
  })
);
// Create Logger
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf((log) => {
      return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`;
    })
  ),
  transports: allowedTransports,
});

module.exports = logger;
