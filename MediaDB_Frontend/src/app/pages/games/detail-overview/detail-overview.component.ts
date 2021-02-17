import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDetail } from '../../../models/game/game-detail';
 
@Component({
  selector: 'app-detail-overview',
  templateUrl: './detail-overview.component.html',
  styleUrls: ['./detail-overview.component.scss']
})
export class DetailOverviewComponent implements OnInit {

  private id: string;
  private gameDetailResult: GameDetail = new GameDetail();
  private backgroundImage;

  constructor(
    private gameservice: GameService,
    private activeroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activeroute.snapshot.params['id'];
    console.log('ich bin waldemar');
    console.log('test nein ich bin waldemar');
    this.getGameDetails(this.id);
  }

  getGameDetails(guid: string) {
    this.gameservice.getDetailedOverview(this.id).subscribe(
      (response: any) => {
        this.gameDetailResult = response.results;
        this.backgroundImage = response.results.image.screen_large_url;
        console.log(this.gameDetailResult);
      }
    );
  }
}
