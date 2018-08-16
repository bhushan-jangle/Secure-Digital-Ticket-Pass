import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';



/**
 * Generated class for the SignatureComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'signature',
  templateUrl: 'signature.html'
})
export class SignatureComponent {

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  public signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200
  };
  public signatureImage: string;
  public data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  //Other Functions

  drawCancel() {
    this.viewCtrl.dismiss();
  }

  drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    this.viewCtrl.dismiss(this.signatureImage);
  }

  drawClear() {
    this.signaturePad.clear();
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

  ngAfterViewInit() {
    this.signaturePad.clear();
    this.canvasResize();
  }

}
