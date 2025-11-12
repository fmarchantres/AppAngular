import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoCienciasComponent } from './evento-ciencias.component';

describe('EventoCienciasComponent', () => {
  let component: EventoCienciasComponent;
  let fixture: ComponentFixture<EventoCienciasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EventoCienciasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventoCienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
