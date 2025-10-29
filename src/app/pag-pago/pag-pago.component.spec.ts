import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagPagoComponent } from './pag-pago.component';

describe('PagPagoComponent', () => {
  let component: PagPagoComponent;
  let fixture: ComponentFixture<PagPagoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagPagoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
