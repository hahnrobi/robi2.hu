import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, share } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { UptimeGroup } from './model/group';

@Injectable({
  providedIn: 'root'
})
export class UptimeService {
  constructor(private http:HttpClient) {}
  
  private uptime$ = timer(0, 30000).pipe(
    switchMap(() => {
      return this.http.get<UptimeGroup[]>(environment.uptimes.apiUrl + "?" + new Date().getTime())
    }),
    share()
  );

  public getUptime() {
    return this.uptime$;
  }
}
