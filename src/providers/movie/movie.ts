import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  public baseURL = 'https://api.themoviedb.org/3/';
  public apiKey = 'api_key=fa171f3ba60c2f74ab2bfd17e0ba22d9';
  

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
  getNowMovie(){
    const url = this.baseURL + 'movie/now_playing?' + this.apiKey;
    return this.http.get(url);
  }

  getUpcomingmovie(){
    const url = this.baseURL + 'movie/upcoming?' + this.apiKey;
    return this.http.get(url);
  }
  getTopratedmovie(){
    const url = this.baseURL + 'movie/top_rated?' + this.apiKey;
    return this.http.get(url);
  }
  getPopularmovie(){
    const url = this.baseURL + 'movie/popular?' + this.apiKey;
    return this.http.get(url);
  }
  searchMovie(query) {
    const url = this.baseURL + 'search/movie?query=' + query + '&' + this.apiKey;
    return this.http.get(url);
  }
}
