export enum MessageStatus {
    INFO = "info",
    DEBUG = "debug",
    WARN = "warn",
    ERROR = "error"
}

export interface IMessageFormating {
    formatMessage(message: string, status: MessageStatus): string;
}