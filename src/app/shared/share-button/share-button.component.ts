import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss']
})
export class ShareButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    navigator.share(this.getDataToShare());
  }

  canShare() {
    const data = this.getDataToShare();
    if (navigator.canShare) {
      const res = navigator.canShare(data);
      if (!res) {
        console.error('Cannot prepare share button for object: ', data);
      }
      return res;
    }
    return false;
  }

  private getDataToShare() {
    return {
      url: window.location.href,
      title: "ROBI2.hu",
      text: document.title
    }
  }

}
