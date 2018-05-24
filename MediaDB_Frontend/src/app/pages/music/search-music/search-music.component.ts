import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../services/music/music.service';
import { MusicSearch } from '../../../models/music/music-search';
 
@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.scss']
})
export class SearchMusicComponent implements OnInit {

  musicSearchResults: Array<MusicSearch>;
  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit() {
  }

  searchMusic(trackTitle: string) {
    this.musicService.searchMusic(trackTitle).subscribe(
      (response: any) => {
        this.musicSearchResults = response.results.trackmatches.track;
        
        this.musicSearchResults.forEach((element, index) => {
             const obj = element.image;
             const formatedJSONWithoutHash = JSON.stringify(obj).replace(/#text/g, 'image_path');
             element.image = JSON.parse(formatedJSONWithoutHash);
          
        });
      }
    );
  }

}
