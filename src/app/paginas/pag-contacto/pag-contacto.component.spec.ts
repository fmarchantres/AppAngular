import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagContactoComponent } from './pag-contacto.component';

describe('PagContactoComponent', () => {
  let component: PagContactoComponent;
  let fixture: ComponentFixture<PagContactoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagContactoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
