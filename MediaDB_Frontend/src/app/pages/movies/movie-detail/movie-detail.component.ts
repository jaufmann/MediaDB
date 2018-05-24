import { Component, OnInit } from '@angular/core';
import { MovieService } from'../../../services/movie/movie.service';
import { MovieDetail } from'../../../models/movie/movie-detail';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  private movieDetail: MovieDetail;
  private backgroundImage: string;
  private id: number;

  constructor(
    private movieService: MovieService,
    private activeroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeroute
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.id = params['id'];
    })

    this.movieService.getMovieDetail(this.id).subscribe(
      (response: any)=> {
        this.movieDetail = response;
        this.backgroundImage = "https://image.tmdb.org/t/p/original/"+response.backdrop_path;
        console.log(this.movieDetail);
      }
    )
  } 

  

}
