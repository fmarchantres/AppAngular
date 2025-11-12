import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagCrearEventoComponent } from './pag-crear-evento.component';

describe('PagCrearEventoComponent', () => {
  let component: PagCrearEventoComponent;
  let fixture: ComponentFixture<PagCrearEventoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagCrearEventoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagCrearEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
