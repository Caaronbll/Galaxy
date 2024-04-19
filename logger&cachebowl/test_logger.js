const logger = require("./logger");

describe("logger", () => {
  it("should log warnings to warnings file", () => {
    logger.warn("Test warning");

    // Assert file was written
  });

  it("should log errors to errors file", () => {
    logger.error("Test error");

    // Assert file was written
  });

  it("should log to console with timestamp and JSON format", () => {
    // Spy on console.log
    // Call logger.info('Test')
    // Assert console.log called with expected format
  });
});
