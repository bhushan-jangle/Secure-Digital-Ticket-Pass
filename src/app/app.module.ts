import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { UploadComponent } from '../components/upload/upload';
import { AddsignComponent } from '../components/addsign/addsign';
import { SignatureComponent } from '../components/signature/signature';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { RenewPage } from '../pages/renew/renew';
import { CreatePage } from '../pages/create/create';
import { MainPage } from '../pages/main/main';
import { StatusPage } from '../pages/status/status';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { PaymentPage } from "../pages/payment/payment";
import { UploadPage } from '../pages/upload/upload';
import { TicketPage } from '../pages/ticket/ticket';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    MenuPage,
    UploadComponent,
    RenewPage,
    CreatePage,
    MainPage,
    StatusPage,
    QrcodePage,
    PaymentPage,
    UploadPage,
    TicketPage,
    AddsignComponent,
    SignatureComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    MenuPage,
    RenewPage,
    CreatePage,
    MainPage,
    StatusPage,
    QrcodePage,
    PaymentPage,
    UploadPage,
    TicketPage,
    AddsignComponent,
    SignatureComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    File,
    Transfer,
    Camera,
    FilePath
  ]
})
export class AppModule {}
