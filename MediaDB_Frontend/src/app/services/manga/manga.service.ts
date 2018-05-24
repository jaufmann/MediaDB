import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MangaService {

  constructor(
    private http: HttpClient
  ) { }

  getMangas(mangaName: string) {
    return this.http.get('https://api.jikan.moe/search/manga/' + mangaName);
  }

  getMangaDetails(mangaId: number) {
    return this.http.get('https://api.jikan.moe/manga/' + mangaId);
  }
}
