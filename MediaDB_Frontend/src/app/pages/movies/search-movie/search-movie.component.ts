import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie/movie.service';
import { MovieSearch } from '../../../models/movie/movie-search';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  private movieSearchResults: MovieSearch;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  searchMovie(movieName: string) {
    this.movieService.searchMovie(movieName).subscribe(
      (response: any) => {
        this.movieSearchResults = response.results;
        console.log(response);
      }
    )
  }

}
