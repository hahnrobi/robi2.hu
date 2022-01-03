import { Injectable } from '@angular/core';
import { PortfolioItem } from './portfolio-item';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolio:PortfolioItem[] = [
    {
      category: "website",
      title: "LadyPhoto",
      techs: ["Angular", "Angular Material"],
    },
    {
      category: "website",
      title: "Shutter",
      image: "/assets/images/portfolio/shutter.jpg",
      url: "https://shutter.iva.hu",
      techs: ["Angular", "NodeJS", "Nebular"],
    },
    {
      category: "website",
      title: "Nagydorog Nagyközség honlapja",
      techs: ["Joomla!", "Gantry", "PHP"],
      url: "http://nagydorog.hu",
      image: "/assets/images/portfolio/nagydoroghu.jpg",
    },
    {
      category: "website",
      title: "EDEN Conference Area",
      image: "/assets/images/portfolio/edenconf.jpg",
      url: "https://www.eden-online.org/2021_madrid/conference-programme/?eden_day=1",
      techs: ["WordPress", "PHP"],
    },
    {
      category: "website",
      title: "EDEN 30 Anniversary website",
      image: "/assets/images/portfolio/eden30.jpg",
      url: "https://30.eden-online.org",
      techs: ["WordPress", "PHP"],
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
      category: "website",
      title: "Díszposta - Jaksa János honlapja",
      techs: ["WordPress", "PHP"],
      image: "/assets/images/portfolio/jaksaj.jpg",
      url: "http://jaksaj-diszposta.hu/"
    },
    {
      title: "DUE Sportnap 2019",
      category: "video",
      image: "https://i3.ytimg.com/vi/COD2QP1k4T4/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=COD2QP1k4T4" 
    },
    {
      title: "Cserép Egér",
      category: "graphics",
      image: "/assets/images/portfolio/cserepeger.jpg"
    },
    {
      title: "DUE Sportnap 2018",
      category: "video",
      url: "https://www.youtube.com/watch?v=VkcTd8b7fBg",
      image: "https://i3.ytimg.com/vi/VkcTd8b7fBg/maxresdefault.jpg",
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
