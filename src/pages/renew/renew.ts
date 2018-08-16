import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
/**
 * Generated class for the RenewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-renew',
  templateUrl: 'renew.html',
})
export class RenewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RenewPage');
  }
  openWebpage() {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      
    }
     // Opening a URL and returning an InAppBrowserObject
     const browser = this.inAppBrowser.create('https://imjo.in/9ZZVRw', '_self', options);
    
     // Inject scripts, css and more with browser.X
    }

}
