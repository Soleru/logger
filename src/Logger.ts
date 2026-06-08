import type { ILoggerFunction } from "./interface/ILoggerFunction.js";
import { MessageStatus, type IMessageFormating } from "./interface/IMessageFormating.js";
import { DefaultFormatMessage } from "./functionImplementation/DefaultFormatMessage.js";
import { LogConsole } from "./functionImplementation/LogConsole.js";
import { LogFile } from "./functionImplementation/LogFile.js";

class Logger implements ILoggerFunction {
    constructor(private logFunctions: ILoggerFunction[], private messageFormating: IMessageFormating, private debugMode: boolean = false) {}

    info(message: string): void {
        for (let logFunction of this.logFunctions) {
            logFunction.info(this.messageFormating.formatMessage(message, MessageStatus.INFO));
        }
    }

    debug(message: string): void {
        if (!this.debugMode) return;
        for (let logFunction of this.logFunctions) {
            logFunction.info(this.messageFormating.formatMessage(message, MessageStatus.DEBUG));
        }
    }

    warn(message: string): void {
        for (let logFunction of this.logFunctions) {
            logFunction.info(this.messageFormating.formatMessage(message, MessageStatus.WARN));
        }
    }

    error(message: string): void {
        for (let logFunction of this.logFunctions) {
            logFunction.info(this.messageFormating.formatMessage(message, MessageStatus.ERROR));
        }
    }    
}

export class LoggerBuilder {
    private logFunctions: ILoggerFunction[];
    private messageFormating: IMessageFormating;
    private debug: boolean;
    private static loggerInstance: Logger;

    constructor() {
        this.logFunctions = [];
        this.messageFormating = new DefaultFormatMessage();
        this.debug = false;
    }

    addLogFunction(logFunction: ILoggerFunction) {
        this.logFunctions.push(logFunction);
        return this;
    }

    setMessageFormating(messageFormating: IMessageFormating) {
        this.messageFormating = messageFormating;
        return this;
    }

    setDebug(debugMode: boolean) {
        this.debug = debugMode;
        return this;
    }

    build() {
        return new Logger(this.logFunctions, this.messageFormating, this.debug);
    }

    buildStatic() {
        if (!LoggerBuilder.loggerInstance) {
            LoggerBuilder.loggerInstance = new Logger(this.logFunctions, this.messageFormating, this.debug);
        }
        return LoggerBuilder.loggerInstance;
    }
}

export function getDefaultLogger(debug: boolean = false): Logger {
    return new LoggerBuilder()
        .addLogFunction(new LogConsole())
        .addLogFunction(new LogFile())
        .setDebug(debug)
        .buildStatic();
}