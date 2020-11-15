import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayingGamePage } from './playing-game.page';

describe('PlayingGamePage', () => {
  let component: PlayingGamePage;
  let fixture: ComponentFixture<PlayingGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayingGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
