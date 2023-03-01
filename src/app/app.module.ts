import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QrComponent } from './qr/qr.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    QrComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
