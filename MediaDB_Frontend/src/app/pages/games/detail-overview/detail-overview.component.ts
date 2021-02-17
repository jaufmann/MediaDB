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
    console.log('ich habe nur ein log');
      console.log('ich habe nur ein log');
      console.log('ich habe nur ein log');
      console.log('ich habe nur ein log');
      console.log('ich habe nur ein log');
<<<<<<< HEAD
      console.log('Sdfsdfsdfsdf');
=======
>>>>>>> 8aa2a426c4cbbdbf03d586dad21ddac02393d779
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
