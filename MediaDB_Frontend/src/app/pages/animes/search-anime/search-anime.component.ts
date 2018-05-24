import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../../services/anime/anime.service';
import { AnimeSearch } from '../../../models/anime/anime-search';
//  

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.scss']
})
export class SearchAnimeComponent implements OnInit {

  animeSearchResults: Array<AnimeSearch> = new Array<AnimeSearch>();

  constructor(
    private animeService: AnimeService
  ) { }

  ngOnInit() {
  }

  searchAnime(animeName: string) {
    this.animeService.searchAnime(animeName).subscribe(
      (response: any) => {
        this.animeSearchResults = response.result;
        console.log(this.animeSearchResults);
      }
    );
  }

}
