import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSorveteComponent } from './sorvete-create.component';

describe('CreateSorveteComponent', () => {
  let component: CreateSorveteComponent;
  let fixture: ComponentFixture<CreateSorveteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSorveteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSorveteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
