import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadNotifications,
  loadNotificationsSuccess,
  loadNotificationsFailure,
} from './notification.actions';
import { NotificationService } from '../../service/notification.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllNotifications } from './notification.selectors';
import { AppState } from '../app.state';

@Injectable()
export class NotificationEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {}

  // Run this code when a loadNotifications action is dispatched
  loadNotifications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNotifications),
      switchMap(() =>
        // Call the getNotifications method, convert it to an observable
        from(this.notificationService.getNotifications()).pipe(
          // Take the returned value and return a new success action containing the notifications
          map((notifications:any) => loadNotificationsSuccess({ notifications: notifications })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadNotificationsFailure({ error })))
        )
      )
    )
  );
}