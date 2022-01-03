import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WebFile } from './webfile';

@Component({
  selector: 'file-list-item',
  templateUrl: './hasznos-file-list-item.component.html',
  styleUrls: ['./hasznos-file-list-item.component.scss']
})
export class HasznosFileListItemComponent implements OnInit {

  @Input() file:WebFile;
  @Input() password:string

  dlProgress:string|null;
  dlProgressPercent:number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getFile(uri:string): Observable<HttpEvent<Blob>> {   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.password
      }),
      responseType: 'blob'
    };
    return this.http.get("/hasznos-files/getfile.php?file=" + uri, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.password),
      observe: 'events',
      reportProgress: true,
      responseType: 'blob'
    });
}

downloadFile(uri:string,): void {
  this.getFile(uri)
      .subscribe(x => {
          // It is necessary to create a new blob object with mime-type explicitly set
          // otherwise only Chrome works like it should
          if (x.type === HttpEventType.DownloadProgress) {
            if(x.total != undefined) {
            const percentDone = Math.round(100 * x.loaded / x.total);
            this.dlProgress = " (" + percentDone + "%)";
            this.dlProgressPercent = percentDone;
            console.log(percentDone);
            }
          }
          if (x.type === HttpEventType.Response) {

          var newBlob = new Blob([x.body as BlobPart], { type: "application/pdf" });

          // IE doesn't allow using a blob object directly as link href
          // instead it is necessary to use msSaveOrOpenBlob
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveOrOpenBlob(newBlob);
              return;
          }

          // For other browsers: 
          // Create a link pointing to the ObjectURL containing the blob.
          const data = window.URL.createObjectURL(newBlob);

          var link = document.createElement('a');
          link.href = data;
          link.download = uri;
          // this is necessary as link.click() does not work on the latest firefox
          link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

          this.dlProgressPercent = 0;
          this.dlProgress = null;
          
          setTimeout(function () {
              // For Firefox it is necessary to delay revoking the ObjectURL
              window.URL.revokeObjectURL(data);
              link.remove();
              
          }, 100);
        }
      });
}
}
