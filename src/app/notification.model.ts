export interface Notification {
    companyId: string;
    notifications: NotificationObj[];
}

export interface NotificationObj {
    date: string;
    label: string;
    interval: string;
}