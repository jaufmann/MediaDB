import { Component, OnInit } from '@angular/core';
import { MangaService } from '../../../services/manga/manga.service';

@Component({
  selector: 'app-search-mangas',
  templateUrl: './search-mangas.component.html',
  styleUrls: ['./search-mangas.component.scss']
})
export class SearchMangasComponent implements OnInit {
  mangaResults: any;

  constructor(
    private mangaService: MangaService
  ) { }

  ngOnInit() {

  }

  searchMangas (mangaName: string) {
    this.mangaService.getMangas(mangaName).subscribe(
      (data: any) => {
        this.mangaResults = data.result;
        console.log(data);
      }
    );


  }

}
