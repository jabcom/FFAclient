import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseCatagoryPage } from './choose-catagory.page';

describe('ChooseCatagoryPage', () => {
  let component: ChooseCatagoryPage;
  let fixture: ComponentFixture<ChooseCatagoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCatagoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseCatagoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
