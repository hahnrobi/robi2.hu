import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-discord-widget-page',
  templateUrl: './discord-widget-page.component.html',
  styleUrls: ['./discord-widget-page.component.scss']
})
export class DiscordWidgetPageComponent implements OnInit {

  constructor() { }

  iFrameIsLoading = true;
  faUserPlus = faUserPlus;


  texts = ["LoLozni!", "rotyogtatni a minimált!", "hallgatni a Balázsék porszívóját?!", "kattogni!"];
  currentText = 0;
  currentChar = 0;
  textDeleting = false;

  welcomeText = "";

  ngOnInit(): void {
    this.texts = this.shuffle(this.texts);
    this.checkLoadedStatusToStartWelcomeTexts();
  }
  checkLoadedStatusToStartWelcomeTexts(): void {
    if(true) {
      this.drawWelcomeTexts();
    }else{
      setTimeout(() => {this.checkLoadedStatusToStartWelcomeTexts() }, 500);
    }
  }
  drawWelcomeTexts(): void {
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
