import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  selector: 'app-discord-widget-page',
  templateUrl: './discord-widget-page.component.html',
  styleUrls: ['./discord-widget-page.component.scss'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(4000, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(4000, style({opacity: 0}))
      ])
    ])]
  
})
export class DiscordWidgetPageComponent implements OnInit, OnDestroy {

  constructor(private serviceTitle:Title) { }

  iFrameIsLoading = true;
  faUserPlus = faUserPlus;

  doDraw = true;

  texts = ["LoLozni!", "rotyogtatni a minimált!", "hallgatni a Balázsék porszívóját?!", "kattogni!"];
  currentText = 0;
  currentChar = 0;
  textDeleting = false;

  private _welcomeText: string = "";
  get welcomeText(): string {
      return this._welcomeText;
  }
  set welcomeText(value: string) {
      this._welcomeText = value;
      this.serviceTitle.setTitle("Gyere hozzánk " + value);
  }

  ngOnInit(): void {
    this.texts = this.shuffle(this.texts);
    this.checkLoadedStatusToStartWelcomeTexts();
  }
  ngOnDestroy(): void {
    this.doDraw = false;
  }
  checkLoadedStatusToStartWelcomeTexts(): void {
    if(true) {
      this.drawWelcomeTexts();
    }else{
      setTimeout(() => {this.checkLoadedStatusToStartWelcomeTexts() }, 500);
    }
  }
  drawWelcomeTexts(): void {
    if(!this.doDraw) return;
    if(this.currentText >= this.texts.length) {
      this.currentText = 0;
      this.currentChar = 0;
    }
    if(this.textDeleting) {
      if(this.currentChar < 0) {
        this.currentText++;
        this.currentChar = 0;
        this.welcomeText = "";
        this.textDeleting = false;
      } else {
      this.welcomeText = this.welcomeText.slice(0,-1);
      this.currentChar--;
      }
    }else {
      if(this.currentChar < this.texts[this.currentText].length) {
        this.welcomeText += this.texts[this.currentText][this.currentChar++];
      }else{
        this.textDeleting = true;
        setTimeout(() => {this.drawWelcomeTexts();}, 2000);
        return;
      }
    }
    if(this.textDeleting) {
        setTimeout(() => {this.drawWelcomeTexts();}, 25);
    }else {
        setTimeout(() => {this.drawWelcomeTexts();}, 100);
    }
  }
  shuffle(array: Array<string>): Array<string> {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}
