import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NotificationEffects } from './state/notification-schedules/notification.effects';
import { notificationReducer } from './state/notification-schedules/notification.reducer';
import { NotificationScheduleComponent } from './notification-schedule/notification-schedule.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotificationScheduleComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ notifications: notificationReducer }),
    EffectsModule.forRoot([NotificationEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
