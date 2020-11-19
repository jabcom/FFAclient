import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KickModelPage } from './kick-model.page';

describe('KickModelPage', () => {
  let component: KickModelPage;
  let fixture: ComponentFixture<KickModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KickModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
