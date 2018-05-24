import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../../services/manga/manga.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent implements OnInit {

  mangaDetailsResult: any;
  mal_id: number;
  backgroundImage = 'assets/mangaheader.jpg';

  constructor(
    private mangaService: MangaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.mal_id = this.activatedRoute.snapshot.params['id'];
    this.mangaService.getMangaDetails(this.mal_id).subscribe(
      (data) => {
        this.mangaDetailsResult = data;
        console.log(data);
      }
    );
  }

}
