import { SMS } from '@ionic-native/sms/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export class PhoneBookDetailPage {

  contact = {name:'', telephone:'', imgeUrl:''};

  constructor(public navCtrl: NavController, public navP: NavParams,private mysms: SMS,private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contact = this.navP.data
    console.log(this.contact);
  }

  call(){
    alert("call");
    window.open('tel:'+this.contact.telephone);
  }



}//end class
