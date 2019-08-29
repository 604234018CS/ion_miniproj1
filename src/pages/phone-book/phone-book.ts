import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'Sama', telephone: '0986866014', imageUrl: 'assets/imgs/friend1.jpg'},
                  {name: 'Ning', telephone: '0900735950', imageUrl: 'assets/imgs/friend2.jpg'},
                  {name: 'Needa', telephone: '0882629408', imageUrl: 'assets/imgs/friend3.jpg'},
                  {name: 'Nas', telephone: '0660083086', imageUrl: 'assets/imgs/friend4.jpg'},
                  {name: 'Vee', telephone: '0864845806', imageUrl: 'assets/imgs/friend5.jpg'}
                  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }


}//end class
