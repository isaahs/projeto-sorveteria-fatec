import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFornecedorComponent } from './fornecedor-update.component';

describe('UpdateFornecedorComponent', () => {
  let component: UpdateFornecedorComponent;
  let fixture: ComponentFixture<UpdateFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
