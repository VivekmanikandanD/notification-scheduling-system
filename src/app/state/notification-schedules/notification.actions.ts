import { createAction, props } from '@ngrx/store';
import { Notification } from '../../notification.model';

export const loadNotifications = createAction('[Notification Page] Load Notifications');

export const loadNotificationsSuccess = createAction(
  '[Notification API] Notification Load Success',
  props<{ notifications: Notification[] }>()
);

export const loadNotificationsFailure = createAction(
  '[Notification API] Notification Load Failure',
  props<{ error: string }>()
);