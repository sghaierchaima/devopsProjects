import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifComponent } from './tarif.component';

describe('TarifComponent', () => {
  let component: TarifComponent;
  let fixture: ComponentFixture<TarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
