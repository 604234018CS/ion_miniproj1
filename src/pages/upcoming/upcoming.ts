import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';

  constructor(public navCtrl: NavController, public navParams: NavParams,public upcomingmovie: MovieProvider) {
    this.loadnowdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }
  loadnowdata(){
    this.upcomingmovie.getUpcomingmovie().subscribe(nowmovies =>{
    this.moviesArray=nowmovies['results'];
    });

  }
  Moviedetail(upcomingmovie){
  this.navCtrl.push("MoviedetailPage",upcomingmovie);
  }
  onEvent(ev: any) {
    let val = ev.target.value;
    if(val.length !== 0){
      this.upcomingmovie.searchMovie(val).subscribe(upmovies => {
        this.moviesArray = upmovies['results'];
      });
    } else {
      this.loadnowdata();
    }
  }
}
