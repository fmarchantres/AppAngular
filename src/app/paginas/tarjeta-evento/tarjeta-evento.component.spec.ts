import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TarjetaEventoComponent } from './tarjeta-evento.component';

describe('TarjetaEventoComponent', () => {
  let component: TarjetaEventoComponent;
  let fixture: ComponentFixture<TarjetaEventoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TarjetaEventoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
