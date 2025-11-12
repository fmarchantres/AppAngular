import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagNotificacionesComponent } from './pag-notificaciones.component';

describe('PagNotificacionesComponent', () => {
  let component: PagNotificacionesComponent;
  let fixture: ComponentFixture<PagNotificacionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagNotificacionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
