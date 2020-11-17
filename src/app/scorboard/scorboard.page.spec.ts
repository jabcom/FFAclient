import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScorboardPage } from './scorboard.page';

describe('ScorboardPage', () => {
  let component: ScorboardPage;
  let fixture: ComponentFixture<ScorboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScorboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
