import { appendFileSync, existsSync, mkdirSync } from "fs";
import type { ILoggerFunction } from "../interface/ILoggerFunction.js";

export class LogFile implements ILoggerFunction {
    private fileName;

    constructor(fileName: string = Date.now().toString()) {
        if (!existsSync("log")) {
            mkdirSync("log");
        }
        this.fileName = "log/" + fileName + ".log";
    }

    info(message: string): void {
        appendFileSync(this.fileName, message + "\n");
    }
    debug(message: string): void {
        appendFileSync(this.fileName, message + "\n");
    }
    warn(message: string): void {
        appendFileSync(this.fileName, message + "\n");
    }
    error(message: string): void {
        appendFileSync(this.fileName, message + "\n");
    }
}