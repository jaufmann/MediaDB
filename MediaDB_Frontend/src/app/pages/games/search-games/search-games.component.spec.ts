import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchGamesComponent } from './search-games.component';
import { FormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/';
import { GameService } from '../../../services/game/game.service';
import {Location} from "@angular/common";
import {fakeAsync, tick} from '@angular/core/testing';
import { DetailOverviewComponent } from '../../../pages/games/detail-overview/detail-overview.component';

export class GameServiceMock {
    searchGame() {
        return Observable.from('hi');
    }
}

describe('SearchGamesComponent', () => {
  let component: SearchGamesComponent;
  let fixture: ComponentFixture<SearchGamesComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGamesComponent, DetailOverviewComponent ],
      providers: [{provide: GameService, useClass: GameServiceMock}],
      imports: [
          FormsModule,
          RouterTestingModule.withRoutes(
            [
              { path: 'game-details', component: DetailOverviewComponent}
            ]
          )
    })
    .compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the game service', () => {
    const service = spyOn(TestBed.get(GameService), 'searchGame').and.returnValue(Observable.from('hi'));
    component.searchGame('naruto');
    expect(service).toHaveBeenCalled();
  });

  it('navigate to "game-detail" redirects you to /game-detail', fakeAsync(() => {
    router.navigate(['/game-details']);
    tick();
    expect(location.path()).toBe('/game-details');
  }));

});
