import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private baseUrl = 'http://localhost:8000/notifications';
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }

    getNotifications(): Observable<any> {
        const res= this._http.get(this.baseUrl);
        console.log(res);
        return res;
    }
}
