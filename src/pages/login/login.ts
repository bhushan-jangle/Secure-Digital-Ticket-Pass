import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { MenuPage } from '../menu/menu';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

// class for login
export class LoginPage {

  data:any = {};
  pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, private toastCtrl: ToastController) {
    this.data.username = '';
    this.data.password = '';
    this.http = http;
    this.pushPage = RegisterPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  // on submit, sending form data to NodeJs api for validating the user.
  submit() {
    let link = 'https://morning-temple-38654.herokuapp.com/users/login';
    let myData = JSON.stringify(this.data);
    this.http.post(link, myData, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text' 
   })
    .subscribe(data => {
      console.log("hurray!");
      console.log(data);
    this.navCtrl.push(MenuPage);
    }, error => {
    console.log("Oooops!");
    console.log(error);
    this.presentToast();
    });
    }

    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'Invalid Credentials',
        duration: 3000,
        position: 'top',
        cssClass: 'toast'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }

}
