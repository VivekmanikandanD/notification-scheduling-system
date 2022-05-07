import { createReducer, on } from '@ngrx/store';
import {
  loadNotifications,
  loadNotificationsSuccess,
  loadNotificationsFailure,
} from './notification.actions';
import { Notification } from '../../notification.model';

export interface NotificationState {
  notifications: Notification[];
  error?: string;
  status?: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: NotificationState = {
  notifications: [],
  error: 'null',
  status: 'pending',
};

export const notificationReducer = createReducer(
  // Supply the initial state
  initialState,
  // Trigger loading the notifications
  on(loadNotifications, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded notifications
  on(loadNotificationsSuccess, (state, { notifications }) => ({
    ...state,
    notifications: notifications,
    error: 'null',
    status: 'success',
  })),
  // Handle notifications load failure
  on(loadNotificationsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);