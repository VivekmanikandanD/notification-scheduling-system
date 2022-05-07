import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NotificationState } from './notification.reducer';

export const selectNotifications = (state: AppState) => state.notifications;

export const selectAllNotifications = createSelector(
    selectNotifications,
  (state: NotificationState) => state.notifications
);