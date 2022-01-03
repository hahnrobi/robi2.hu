import { Injectable } from '@angular/core';
import { PortfolioItem } from './portfolio-item';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolio:PortfolioItem[] = [
    {
      category: "website",
      title: "Nagydorog Nagyközség honlapja",
      techs: ["Joomla!", "Gantry", "PHP"],
      url: "http://nagydorog.hu",
      image: "/assets/images/portfolio/nagydoroghu.jpg",
    },
    {
      category: "graphics",
      title: "DUE cipősdoboz akció",
      image: "/assets/images/portfolio/ciposdoboz.jpg",
    },
    {
      category: "website",
      title: "Dunaújvárosi Egyetem Hallgatói Önkormányzat weboldala",
      techs: ["WordPress", "PHP"],
      image: "/assets/images/portfolio/hoksite.jpg",
      url: "http://hok.uniduna.hu"
    },
    {
      title: "DUE Gólyatábor 2019",
      category: "video",
      url: "https://www.youtube.com/watch?v=COD2QP1k4T4" 
    },
    {
      title: "Cserép Egér",
      category: "graphics",
    },
    {
      title: "DUE Sportnap 2018",
      category: "video",
      url: "https://www.youtube.com/watch?v=VkcTd8b7fBg"
    },
    {
      title: "Nagydorogi Falunapok plakát",
      category: "graphics",
    },
    {
      title: "NagydorogTv képújság",
      category: "website",
    },
    {
      title: "DsD táncegyesület gálavideók",
      category: "video",
    },
    {
      title: "Pincehegyi Lovas Derby",
      category: "website",
      techs: ["IVA Forms", "PHP"]
    },
    {
      title: "Penta Ablak+Ajtó",
      category: "website",
      image: "/assets/images/portfolio/pentapaks.jpg",
      url: "http://pentapaks.hu"
    },
    {
      title: "Nagydorogi Lovas Ügyességi Verseny",
      category: "website",
      image: "/assets/images/portfolio/lovasugyessegi.png",
      techs: ["IVA Forms", "PHP"],
    },
    {
      title: "Nagydorogi Pörköltfőző Fesztivál",
      category: "website",
      techs: ["IVA Forms", "PHP"],
    },
    {
      title: "Funky Party és Fánk Fesztivál 2014",
      category: "video",
      url: "https://www.youtube.com/watch?v=syj9nMbtpc4"
    },
    {
      category: "website",
      title: "VBG Sulirádió",
      techs: ["UTF-8"],
    }
  ]

  public getPortfolio () {
    return this.portfolio;
  }

  constructor() { }
}
