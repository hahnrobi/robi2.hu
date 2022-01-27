import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { UptimeGroup } from './model/group';

@Injectable({
  providedIn: 'root'
})
export class UptimeService {

  constructor(private http:HttpClient) {
  }

  getUptime() {
    return this.http.get<UptimeGroup[]>(environment.uptimes.apiUrl);
  }
}
