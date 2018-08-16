import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SignatureComponent } from '../signature/signature';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'addsign',
  templateUrl: 'addsign.html'
})
export class AddsignComponent {

  public signatureImage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController, public popoverCtrl: PopoverController) {
    // this.signatureImage = navParams.get('signatureImage');
  }

  presentPopover(ev) {
    setTimeout(() => {
      let popover = this.popoverCtrl.create(SignatureComponent);
      popover.present({
        ev: ev
      });
      popover.onDidDismiss(data => {
        if (data != null) {
          this.signatureImage = data;
        }
      });
    }, 300);

  }

}
