import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWordsPage } from './add-words.page';

describe('AddWordsPage', () => {
  let component: AddWordsPage;
  let fixture: ComponentFixture<AddWordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
