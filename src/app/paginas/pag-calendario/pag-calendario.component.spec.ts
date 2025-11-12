import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagCalendarioComponent } from './pag-calendario.component';

describe('PagCalendarioComponent', () => {
  let component: PagCalendarioComponent;
  let fixture: ComponentFixture<PagCalendarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagCalendarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
