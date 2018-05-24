import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game/game.service';
import { GameSearch } from '../../../models/game/game-search';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.scss']
})
export class SearchGamesComponent implements OnInit {

  searchGameResults: Array<GameSearch>;
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
  }

  searchGame(gameName: string) {
    this.gameService.searchGame(gameName).subscribe(
        (response: any) => {
          this.searchGameResults = response.results;
          console.log(this.searchGameResults);
        }
    );
  }

}
