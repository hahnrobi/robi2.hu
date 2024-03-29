import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faShareNodes} from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonComponent implements OnInit {

  constructor() { }

  @Input('url') inputUrl: string = "";
  @Input('title') inputTitle: string = "";

  ngOnInit(): void {
  }

  shareIcon = faShareNodes;

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
    if(this.inputUrl && this.inputTitle) {
      return {
        url:this.inputUrl,
        title: "ROBI2.hu",
        text: this.inputTitle
      }
    }else {
      return {
        url: window.location.href,
        title: "ROBI2.hu",
        text: document.title
      }
    }
  }

}
