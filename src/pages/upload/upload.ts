import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ToastController } from 'ionic-angular';
import { UploadComponent } from '../../components/upload/upload';
import { PaymentPage } from '../payment/payment';
/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  pushPage:any;
  @ViewChild(UploadComponent) multiImageUpload: UploadComponent;
  protected uploadFinished = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.pushPage = PaymentPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  protected submit() {
    if (this.multiImageUpload.images.length == 0) {
        this.showToast("Please select at least 1 photo");
        return;
    }

    this.multiImageUpload.uploadImages().then((images) => {
        this.showToast("Upload successful, view console for details");
        this.uploadFinished = true;
        console.dir(images);
    }).catch(() => {
    });
}

protected cancel() {
    this.confirm('Are you sure to cancel?').then(value => {
        if (value) {
            this.multiImageUpload.abort();
        }
    })
}

private showToast(text: string) {
    this.toastCtrl.create({
        message: text,
        duration: 5000,
        position: 'bottom'
    }).present();
}

private confirm(text: string) {
    return new Promise(
        (resolve) => {
            this.alertCtrl.create({
                message: text,
                buttons: [
                    {
                        text: "No",
                        role: 'cancel',
                        handler: () => {
                            resolve(false);
                        }
                    },
                    {
                        text: "Yes",
                        handler: () => {
                            resolve(true);
                        }
                    }
                ]
            }).present();
        }
    );
}


}
