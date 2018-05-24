import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../../services/anime/anime.service';
import { AnimeDetail } from '../../../models/anime/anime-detail'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})
export class AnimeDetailComponent implements OnInit {

  animeDetailsResult: AnimeDetail;
  backgroundImage = 'https://images6.alphacoders.com/656/656029.png';
  mal_id: number;

  constructor(
    private animeService: AnimeService,
    private activeroute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.mal_id = this.activeroute.snapshot.params['id'];

    this.animeService.getAnimeDetails(this.mal_id).subscribe(
      (response: any) => {
        this.animeDetailsResult = response;
        console.log(this.animeDetailsResult);
      }
    );
  }

}
