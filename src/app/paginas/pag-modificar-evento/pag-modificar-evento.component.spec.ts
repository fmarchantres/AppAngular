import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagModificarEventoComponent } from './pag-modificar-evento.component';

describe('PagModificarEventoComponent', () => {
  let component: PagModificarEventoComponent;
  let fixture: ComponentFixture<PagModificarEventoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagModificarEventoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagModificarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
