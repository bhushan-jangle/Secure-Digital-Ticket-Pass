import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RenewPage } from '../renew/renew';
import { CreatePage } from '../create/create';
import { MainPage } from '../main/main';
import { StatusPage } from '../status/status';
import { QrcodePage } from '../qrcode/qrcode';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  tab1Root = CreatePage;
  tab2Root = RenewPage;
  tab3Root = MainPage;
  tab4Root = StatusPage;
  tab5Root = QrcodePage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
