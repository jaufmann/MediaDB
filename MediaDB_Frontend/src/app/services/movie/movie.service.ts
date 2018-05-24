import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieSearch } from '../../models/movie/movie-search';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  searchMovie(movieName: string): Observable<Array<MovieSearch>> {
    return this.http.get<Array<MovieSearch>>('https://api.themoviedb.org/3/search/movie?api_key=1ac6795dbf4f9b2f757fe20b1e3847c8&query='+movieName+'&page=1&include_adult=false')
           .map(res=> res);
  }

  getMovieDetail(movieId: number){
    return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=1ac6795dbf4f9b2f757fe20b1e3847c8&language=en-US');
  }

}
