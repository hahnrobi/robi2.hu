import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  iconFaLink = faLink;

  constructor(private serviceTitle:Title) { }

  ngOnInit(): void {
    this.serviceTitle.setTitle("Hahn Róbert");
  }

}
