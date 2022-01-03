import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  private portfolio = this.portfolioService.getPortfolio();

  constructor(private titleService: Title, private portfolioService:PortfolioService) {

  }

  public getPortfolioItems(filter:string[] = []) {
    if(filter.length > 0) {
          return this.portfolio.filter(item => filter.includes(item.category));
    }
    return this.portfolio;
  }
  public getCategoryTitle(category:string) {
    switch(category) {
      case "video":
        return "Videó"
        break;
      case "graphics":
        return "Grafika"
        break;
      case "website":
        return "Weboldal"
    }
    return "";
  }

  ngOnInit(): void {
    this.titleService.setTitle("Referenciák")
  }

}
