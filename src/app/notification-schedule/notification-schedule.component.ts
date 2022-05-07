import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from '../state/app.state';
import { loadNotifications } from '../state/notification-schedules/notification.actions';
import { selectAllNotifications } from '../state/notification-schedules/notification.selectors';

@Component({
  selector: 'app-notification-schedule',
  templateUrl: './notification-schedule.component.html',
  styleUrls: ['./notification-schedule.component.scss']
})
export class NotificationScheduleComponent implements OnInit {
  public allNotifications$ = this.store.select(selectAllNotifications);
  diffDays:number=0;
  intervalDays:number[] = [];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadNotifications());
    this.calculateHardBlockDays();
  }

  calculateHardBlockDays() {
    this.allNotifications$.subscribe((value: any) => {
     
      if(value.length){
        console.log(JSON.stringify(value))
        const notifications = value[0].notifications;
        const oneDay = 24 * 60 * 60 * 1000; 
        const firstDate:any = new Date(notifications[0].date.split('/')[2],notifications[0].date.split('/')[1],notifications[0].date.split('/')[0]);
        const secondDate:any = new Date(notifications[notifications.length-1].date.split('/')[2],notifications[notifications.length-1].date.split('/')[1],notifications[notifications.length-1].date.split('/')[0]);
        this.diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

        //For calculating interval days
        if(this.diffDays!==0){
          let diff:number = this.diffDays/5;
          diff = Math.ceil(diff);
          const remainingInterval = [5,5,5];
          this.intervalDays.push(diff);
          this.intervalDays.push(...remainingInterval);
        }
      }
    })
  }

  calcDiff() {
    /* const firstDate:any = new Date(item.date.split('/')[2],item.date.split('/')[1],item.date.split('/')[0]);
    const secondDate:any = new Date(item.date.split('/')[2],item.date.split('/')[1],item.date.split('/')[0]);
    this.diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay)); */
    /* if(this.diffDays!==0){
      let diff:number = this.diffDays/5;
      diff = Math.ceil(diff);
      const remainingInterval = [5,5,5];
      this.intervalDays.push(diff,...remainingInterval);
    } */
    return this.intervalDays.shift();
  }
}
