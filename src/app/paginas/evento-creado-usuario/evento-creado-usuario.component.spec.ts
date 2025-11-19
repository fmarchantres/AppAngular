import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventoCreadoUsuarioComponent } from './evento-creado-usuario.component';

describe('EventoCreadoUsuarioComponent', () => {
  let component: EventoCreadoUsuarioComponent;
  let fixture: ComponentFixture<EventoCreadoUsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EventoCreadoUsuarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventoCreadoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
