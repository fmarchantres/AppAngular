import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagPerfilComponent } from './pag-perfil.component';

describe('PagPerfilComponent', () => {
  let component: PagPerfilComponent;
  let fixture: ComponentFixture<PagPerfilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PagPerfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
