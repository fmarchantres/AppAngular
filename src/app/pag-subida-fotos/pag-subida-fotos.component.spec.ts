import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagSubidaFotosComponent } from './pag-subida-fotos.component';

describe('PagSubidaFotosComponent', () => {
  let component: PagSubidaFotosComponent;
  let fixture: ComponentFixture<PagSubidaFotosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagSubidaFotosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagSubidaFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
