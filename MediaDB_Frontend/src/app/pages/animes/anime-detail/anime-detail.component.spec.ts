// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AnimeDetailComponent } from './anime-detail.component';
// import { AnimeSearch } from '../../../models/anime/anime-search';
// import { AnimeService } from '../../../services/anime/anime.service';
// import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs/';

// export class AnimeServiceMock {
//   getAnimeDetails() {
//     return Observable.of({id: 123});
//   }
// }

// describe('AnimeDetailComponent', () => {
//   let component: AnimeDetailComponent;
//   let fixture: ComponentFixture<AnimeDetailComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AnimeDetailComponent ],
//       providers: [
//         {
//           provide: AnimeService,
//           useClass: AnimeServiceMock
//         },
//         {
//           provide: ActivatedRoute,
//           useValue: {
//           queryParams: Observable.of({id: 123})
//         }
//       }]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AnimeDetailComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call the get animedetails service and fill the animedetail object', () => {
//     const service = spyOn(TestBed.get(AnimeService), 'getAnimeDetails').and.returnValue(Observable.of('some value'));
//     component.ngOnInit();
//     expect(service).toHaveBeenCalled();
//     expect(component.animeDetailsResult).toBeDefined();
//   });
// });
