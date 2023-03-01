import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})

export class QrComponent {
  public qrdata="Type here...";
  url:SafeUrl='';
  onCodeChange(url:SafeUrl){
    this.url=url;

  }

}
