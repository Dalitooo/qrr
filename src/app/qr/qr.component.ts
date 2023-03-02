import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent {
  public qrdata="";
  url:SafeUrl='';
  public buttonPressed=false;
  public reset(){
    this.qrdata="";
    this.buttonPressed=!this.buttonPressed;
  }
  public onPressed(){
    this.buttonPressed=!this.buttonPressed;
  }

  onCodeChange(url:SafeUrl){
    this.url=url;
  }
}
