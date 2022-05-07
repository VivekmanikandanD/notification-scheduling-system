import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'notification-scheduling-system';

  ngOnInit(): void {
    console.log("app component inititalized")
  }
}
