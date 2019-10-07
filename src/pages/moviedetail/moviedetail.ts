import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';



/**
 * Generated class for the MoviedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetail',
  templateUrl: 'moviedetail.html',
})
export class MoviedetailPage {

  moviedata:any=[];
  detail: any = [];
  movie: any;
  movieDetails: any;
  backdrop_path: any;
  geners: any;
  videos: any = [];
  Budget: any;
  status: any;
  revenue: any;
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams,public moviedetail: MovieProvider,private tts: TextToSpeech,private socialSharing:SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviedetailPage');
    this.detail = this.navParams.data;
    console.log(this.detail);
  }
  openVideo(key){
    this.navCtrl.push("VideoPage",key);
}
  talk(textOrOptions){
    console.log(textOrOptions);
    this.status.speak(textOrOptions)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  shareFacebook(movie){
    let title = this.detail.title;
    let overview = this.detail.overview;
    this.socialSharing.shareViaFacebook('Movie.title' +title+':'+overview);
    }
    

}
