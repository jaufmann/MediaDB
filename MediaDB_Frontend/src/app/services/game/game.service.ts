import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameService {

  constructor(
    private http: HttpClient
  ) { }

  searchGame(gameName: string) {
    return this.http.get('https://www.giantbomb.com/api/search/?api_key=f489819d026db7a435d2d20662cf7185cb2563dc&format=json&query='+gameName+'&resources=game&limit=100');
  }

  getDetailedOverview(guid: string) {
    return this.http.get('https://www.giantbomb.com/api/game/'+guid+'/?api_key=f489819d026db7a435d2d20662cf7185cb2563dc&format=json');
  }
}
