import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpHandler } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hasznos-page',
  templateUrl: './hasznos-page.component.html',
  styleUrls: ['./hasznos-page.component.scss']
})
export class HasznosPageComponent implements OnInit {

  password:string = "";

  constructor(private http: HttpClient, private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle("Hasznos tszutszok");
  }
  showFiles(input:string):any {
    this.password=input;
  }

}
