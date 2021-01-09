import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHeaders, HttpClient, HttpResponse, HttpProgressEvent } from '@angular/common/http';
import { Files } from './files';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hasznos-file-list',
  templateUrl: './hasznos-file-list.component.html',
  styleUrls: ['./hasznos-file-list.component.scss']
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + password
      })
    };
    this.http.get<File>("/api/list", httpOptions).subscribe((data:any) => {this.files = data; this.filesLoaded = true;});
  }
    

}
