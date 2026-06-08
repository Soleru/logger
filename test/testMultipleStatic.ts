import { getDefaultLogger } from "../dist/index.js";

let logger = getDefaultLogger();

logger.info("test info");
logger.debug("test debug");
logger.warn("test warn");
logger.error("test error");

logger = getDefaultLogger();

logger.info("test info");
logger.debug("test debug");
logger.warn("test warn");
logger.error("test error");