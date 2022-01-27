import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UptimeService {

  constructor(private http:HttpClient) {

    this.getUptime();
  }
  getUptime() {
    let uptime = this.http.get(environment.uptimes.apiUrl);
    uptime.subscribe(obj => {
      console.log(obj)
    });
    
  }
}
