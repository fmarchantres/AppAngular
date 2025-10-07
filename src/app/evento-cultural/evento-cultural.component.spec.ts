import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoCulturalComponent } from './evento-cultural.component';

describe('EventoCulturalComponent', () => {
  let component: EventoCulturalComponent;
  let fixture: ComponentFixture<EventoCulturalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EventoCulturalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventoCulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
