import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentPage } from '../payment/payment';
import { UploadPage } from '../upload/upload';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  private todo: FormGroup;

  logForm() {

    let link = 'https://ancient-badlands-99328.herokuapp.com/api/student';
    let myData = JSON.stringify(this.todo.value);
    console.log(this.todo.value);
    this.http.post(link, myData, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    })
      .subscribe(data => {
        console.log("hurray!");
        console.log(data);
         this.navCtrl.push(UploadPage);
      }, error => {
        console.log("Oooops!");
        console.log(error);
      });

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      fullName: ['', Validators.required],
      collegeName: ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      passType: ['', Validators.required],
      mobileNo: ['', Validators.required],
      startDate: ['', Validators.required],
      dueDate: ['', Validators.required]

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
