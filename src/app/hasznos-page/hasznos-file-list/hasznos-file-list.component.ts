import { environment } from 'src/environments/environment';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHeaders, HttpClient, HttpResponse, HttpProgressEvent } from '@angular/common/http';
import { Files } from './files';
import { Observable } from 'rxjs';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-hasznos-file-list',
  templateUrl: './hasznos-file-list.component.html',
  styleUrls: ['./hasznos-file-list.component.scss'],
  animations: [
    trigger('itemsAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(
            0, [
              animate('0s .1s cubic-bezier(.17,.67,.44,1.01)', style({
                opacity: 0
              }))
            ]
          )
        ], {optional: true}),
        query(':enter', [
          style({
            transform: 'translateX(-4rem)',
            opacity: 0
          }),
          stagger(100, [
            animate('0.5s 0.1s cubic-bezier(.17,.67,.44,1.01)', style({
              transform: 'translateX(0rem)',
              opacity: 1
            }))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class HasznosFileListComponent implements OnInit, OnChanges {

  @Input() password:string;

  files:Files;
  filesLoaded:boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.password) {
        this.getFilesList(changes.password.currentValue);
    }
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getFilesList(password:string): any {
    this.filesLoaded = false;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + password
      })
    };
    console.log("Getting file list...");
    this.http.get<File>(environment.hasznosApiUrl, httpOptions).subscribe((data:any) => {this.files = data; this.filesLoaded = true;});
  }
    

}
