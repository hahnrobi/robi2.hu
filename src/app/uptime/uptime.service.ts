import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, ReplaySubject, timer, Observable } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { UptimeGroup } from './model/group';

@Injectable({
  providedIn: 'root'
})
export class UptimeService {

  private uptime$: ReplaySubject<UptimeGroup[]>;
  private timerStarted = false;
  private lastUpdate;

  constructor(private http:HttpClient) {
    this.uptime$ = new ReplaySubject<UptimeGroup[]>();
  }
  private timerLogic(): ReplaySubject<UptimeGroup[]> {
    this.timerStarted = true;
    this.updateUptimeData();
    let rxInterval = interval(30000);
    const intervalSub = rxInterval.subscribe(tick => {
      if(this.uptime$.observers.length === 0) {
        intervalSub.unsubscribe();
        this.timerStarted = false;
      }else {
        this.updateUptimeData();
      }
    })
    return this.uptime$;
  }

  private makeRequest():Observable<UptimeGroup[]> {
      return this.http.get<UptimeGroup[]>(environment.uptimes.apiUrl + "?" + new Date().getTime());
  }
  
  updateUptimeData() {
    if(!this.lastUpdate || this.lastUpdate + 1000 < new Date().getTime()) {
      this.lastUpdate = new Date().getTime();
      this.makeRequest().subscribe(d => this.uptime$.next(d));
      console.log("Uptimes updated.");
    }
    
  }

  getUptime(): ReplaySubject<UptimeGroup[]> {
    if(this.timerStarted) {
      return this.uptime$;
    }
    return this.timerLogic();
  }
}
