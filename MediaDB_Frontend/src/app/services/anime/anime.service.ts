import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AnimeService {

  constructor(
    private http: HttpClient
  ) { }

  searchAnime(animeName: string) {
    return this.http.get('https://api.jikan.moe/search/anime/'+animeName);
  }

  getAnimeDetails(mal_id: number) {
    return this.http.get('https://api.jikan.moe/anime/'+mal_id+'/');
  }
}
