export class Alert {
    id: string = '';
    type: AlertType; // Replace with a default value from your `AlertType` enum
    message: string = '';
    autoClose: boolean = false;
    keepAfterRouteChange?: boolean;
    fade: boolean = false;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}