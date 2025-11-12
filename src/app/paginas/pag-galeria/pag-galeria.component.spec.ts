import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagGaleriaComponent } from './pag-galeria.component';

describe('PagGaleriaComponent', () => {
  let component: PagGaleriaComponent;
  let fixture: ComponentFixture<PagGaleriaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagGaleriaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
