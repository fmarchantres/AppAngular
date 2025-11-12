import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagRegistroComponent } from './pag-registro.component';

describe('PagRegistroComponent', () => {
  let component: PagRegistroComponent;
  let fixture: ComponentFixture<PagRegistroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagRegistroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
