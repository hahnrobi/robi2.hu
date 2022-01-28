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

  constructor(private http:HttpClient) {
    this.uptime$ = new ReplaySubject<UptimeGroup[]>();
    
  }
  private timerLogic(): ReplaySubject<UptimeGroup[]> {
    this.timerStarted = true;
    console.log(this.uptime$.observers);
    this.updateUptimeData();
    let rxInterval = interval(5000);
    const intervalSub = rxInterval.subscribe(tick => {
      console.log("tick");
      console.log(this.uptime$.observers);
      this.updateUptimeData();
      if(this.uptime$.observers.length === 0) {
        intervalSub.unsubscribe();
        this.timerStarted = false;
      }
    })
    return this.uptime$;
  }

  private makeRequest():Observable<UptimeGroup[]> {
    return this.http.get<UptimeGroup[]>(environment.uptimes.apiUrl);
  }
  
  updateUptimeData() {
    this.makeRequest().subscribe(d => this.uptime$.next(d));
  }

  getUptime(): ReplaySubject<UptimeGroup[]> {
    if(this.timerStarted) {
      return this.uptime$;
    }
    return this.timerLogic();
  }
}
