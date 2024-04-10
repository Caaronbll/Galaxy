/**
 * Initializes the Express application and configures logging using Winston.
 *
 * This code sets up the Express application, loads environment variables from a .env file,
 * and configures logging using the express-winston and winston libraries.
 *
 * The logger instance is created and configured to log to a file named 'logsInternalErrors.log'
 * using the winston transports.File transport. The logging format is set to include the timestamp,
 * log level, and log message.
 *
 * This code is likely part of the main application entry point and is responsible for setting up
 * the initial application configuration and middleware.
 */
require("dotenv").config();

const express = require("express");
const app = express();
const expressWinston = require("express-winston");
const { transports, format } = require("winston");

require("winston-mongodb");

const logger = require("./logger");


/**
 * Configures the Express application to log requests and errors using Winston.
 *
 * This middleware sets up logging for the Express application using the express-winston
 * and winston libraries. It configures the logger instance to log requests to a file
 * named 'logsInternalErrors.log' using the winston transports.File transport. The
 * logging format is set to include the timestamp, log level, and log message.
 *
 * Additionally, this code sets up several example routes that demonstrate logging
 * at different levels (info, warn, error) and handling of custom errors.
 */
app.use(
  expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true,
  })
);

app.get("/", (req, res) => {
  logger.info("This is an info log");
  res.sendStatus(200);
});

app.get("/400", (req, res) => {
  logger.warn("This is an warn log");
  res.sendStatus(400);
});

app.get("/500", (req, res) => {
  res.sendStatus(500);
});

app.get("/error", (req, res) => {
  throw new Error("This is a custom error");
});

const myFormat = format.printf(({ level, meta, timestamp }) => {
  return `${timestamp} ${level}: ${meta.message}`;
});

app.use(
  expressWinston.errorLogger({
    transports: [
      new transports.File({
        filename: "logsInternalErrors.log",
      }),
    ],
    format: format.combine(format.json(), format.timestamp(), myFormat),
  })
);

app.listen(4000);
