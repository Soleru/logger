import { MessageStatus, type IMessageFormating } from "../interface/IMessageFormating.js";

export class DefaultFormatMessage implements IMessageFormating {
    constructor() {}

    formatMessage(message: string, status: MessageStatus): string {
        let messageStatus: string;
        const messageDate: string = new Date().toLocaleString();
        switch(status) {
            case MessageStatus.INFO:
                messageStatus = "INFO ";
                break;
            case MessageStatus.DEBUG:
                messageStatus = "DEBUG";
                break;
            case MessageStatus.WARN:
                messageStatus = "WARN ";
                break;
            case MessageStatus.ERROR:
                messageStatus = "ERROR";
                break;
        }
        return `${messageDate} - ${messageStatus} - ${message}`;
    }
}