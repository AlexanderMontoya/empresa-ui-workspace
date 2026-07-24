import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaUi } from './empresa-ui';

describe('EmpresaUi', () => {
  let component: EmpresaUi;
  let fixture: ComponentFixture<EmpresaUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
