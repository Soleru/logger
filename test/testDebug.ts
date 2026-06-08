import { getDefaultLogger } from "../dist/index.js";

const logger = getDefaultLogger(true);

logger.info("test info");
logger.debug("test debug");
logger.warn("test warn");
logger.error("test error");