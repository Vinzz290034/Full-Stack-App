export class Alert {
    id: string = '';
    type: AlertType = AlertType.Info; // Replace with a default value from your `AlertType` enum
    message: string = '';
    autoClose: boolean = false;
    keepAfterRouteChange: boolean = false;
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