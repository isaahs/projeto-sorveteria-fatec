import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFornecedorComponent } from './fornecedor-create.component';

describe('CreateFornecedorComponent', () => {
  let component: CreateFornecedorComponent;
  let fixture: ComponentFixture<CreateFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
