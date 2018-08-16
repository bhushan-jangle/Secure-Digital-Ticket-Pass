import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentPage } from '../payment/payment';
import { UploadPage } from '../upload/upload';
import { QrcodePage } from '../qrcode/qrcode';
import { TicketPage } from '../ticket/ticket';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  private todo: FormGroup;
  pushPage: any;
  params: Object;
  logForm() {
    this.pushPage= TicketPage;
    let link = 'https://blooming-mesa-31963.herokuapp.com/products';
    let myData = JSON.stringify(this.todo.value);
    console.log(this.todo.value);
    this.http.post(link, myData, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    })
      .subscribe(data => {
        console.log("hurray!");
        console.log(data);
         
      }, error => {
        console.log("Oooops!");
        console.log(error);
      });

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      fullName: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      dateOfJourney: ['', Validators.required]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

}
