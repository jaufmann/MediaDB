import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router/src/router';

//services
import { MovieService } from './services/movie/movie.service';
import { AnimeService } from './services/anime/anime.service';
import { MusicService } from './services/music/music.service';
import { GameService } from './services/game/game.service';
import { MangaService } from './services/manga/manga.service';

//components
import { AppComponent } from './app.component';
import { SearchMovieComponent } from './pages/movies/search-movie/search-movie.component';
import { SearchAnimeComponent } from './pages/animes/search-anime/search-anime.component';
import { SearchMusicComponent } from './pages/music/search-music/search-music.component';
import { SearchGamesComponent } from './pages/games/search-games/search-games.component';
import { DetailOverviewComponent } from './pages/games/detail-overview/detail-overview.component';
import { AnimeDetailComponent } from './pages/animes/anime-detail/anime-detail.component';
import { MovieDetailComponent } from './pages/movies/movie-detail/movie-detail.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LengthtrimmerPipe } from './pipes/lengthtrimmer.pipe';
import { LoginComponent } from './pages/login/login.component';
import { UserService } from './services/user/user.service';
import { SearchMangasComponent } from './pages/mangas/search-mangas/search-mangas.component';
import { MangaDetailsComponent } from './pages/mangas/manga-details/manga-details.component';


const routes: Routes = [
  { path: 'search-movie', component: SearchMovieComponent},
  { path: 'search-anime', component: SearchAnimeComponent},
  { path: 'search-music', component: SearchMusicComponent},
  { path: 'search-game', component: SearchGamesComponent},
  { path: 'game-details/:id', component: DetailOverviewComponent},
  { path: 'anime-details/:id', component: AnimeDetailComponent},
  { path: 'movie-details', component: MovieDetailComponent},
  { path: 'manga-details/:id', component: MangaDetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'search-manga', component: SearchMangasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent,
    SearchAnimeComponent,
    SearchMusicComponent,
    SearchGamesComponent,
    DetailOverviewComponent,
    AnimeDetailComponent,
    MovieDetailComponent,
    LengthtrimmerPipe,
    LoginComponent,
    SearchMangasComponent,
    MangaDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    ),
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [MovieService, AnimeService, MusicService, GameService, UserService, MangaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
