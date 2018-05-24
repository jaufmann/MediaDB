import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MusicService {

  constructor(
    private http: HttpClient
  ) { }

  searchMusic(trackTitle: string) {
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track='+trackTitle+'&api_key=ecbefad664dd91aa6ed71d1f6548e0df&format=json');
  }
}
