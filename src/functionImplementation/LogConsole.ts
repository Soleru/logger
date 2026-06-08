import type { ILoggerFunction } from "../interface/ILoggerFunction.js";

export class LogConsole implements ILoggerFunction {
    info(message: string): void {
        console.log(message);
    }
    debug(message: string): void {
        console.debug(message);
    }
    warn(message: string): void {
        console.warn(message);
    }
    error(message: string): void {
        console.error(message);
    }
}