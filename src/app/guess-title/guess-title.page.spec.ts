import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuessTItlePage } from './guess-title.page';

describe('GuessTItlePage', () => {
  let component: GuessTItlePage;
  let fixture: ComponentFixture<GuessTItlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessTItlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuessTItlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
