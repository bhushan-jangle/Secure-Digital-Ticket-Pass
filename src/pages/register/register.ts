import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.data.email = '';
    this.data.password = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  submit() {
    let link = 'https://morning-temple-38654.herokuapp.com/users/register';
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
    });
    }

}
