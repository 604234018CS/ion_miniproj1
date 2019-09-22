import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopRatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-rated',
  templateUrl: 'top-rated.html',
})
export class TopRatedPage {

  moviesArray: any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';


  constructor(public navCtrl: NavController, public navParams: NavParams,public topratedmovie: MovieProvider) {
    this.loadnowdata();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TopRatedPage');
  }
  loadnowdata(){
    this.topratedmovie.getTopratedmovie().subscribe(nowmovies =>{
    this.moviesArray=nowmovies['results'];
    });

  }
  Moviedetail(topratedmovie){
  this.navCtrl.push("MoviedetailPage",topratedmovie);
  }

}
