import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationScheduleComponent } from './notification-schedule.component';

describe('NotificationScheduleComponent', () => {
  let component: NotificationScheduleComponent;
  let fixture: ComponentFixture<NotificationScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
