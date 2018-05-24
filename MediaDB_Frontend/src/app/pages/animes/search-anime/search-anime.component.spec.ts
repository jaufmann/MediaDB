import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { SearchAnimeComponent } from './search-anime.component';
import { Observable } from 'rxjs/';
import { FormsModule } from '@angular/forms';
import { AnimeService } from '../../../services/anime/anime.service';
import {RouterTestingModule} from '@angular/router/testing';

export class AnimeServiceMock {
  searchAnime(name: string) {
    return Observable.of({name: name});
  }
}
describe('SearchAnimeComponent', () => {
  let component: SearchAnimeComponent;
  let fixture: ComponentFixture<SearchAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAnimeComponent ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(
          [
            { path: 'search-anime', component: SearchAnimeComponent},
           ]
        )
      ],

      providers: [{provide: AnimeService, useClass: AnimeServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test animeservice', () => {
    const service = spyOn(TestBed.get(AnimeService), 'searchAnime').and.returnValue(Observable.of('some value'));
    component.searchAnime('naruto');
    expect(service).toHaveBeenCalled();
  });
});
