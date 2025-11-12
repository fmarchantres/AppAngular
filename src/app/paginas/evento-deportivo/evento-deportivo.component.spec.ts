import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoDeportivoComponent } from './evento-deportivo.component';

describe('EventoDeportivoComponent', () => {
  let component: EventoDeportivoComponent;
  let fixture: ComponentFixture<EventoDeportivoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EventoDeportivoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventoDeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
