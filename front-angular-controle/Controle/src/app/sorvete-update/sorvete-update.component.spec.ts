import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSorveteComponent } from './sorvete-update.component';

describe('UpdateSorveteComponent', () => {
  let component: UpdateSorveteComponent;
  let fixture: ComponentFixture<UpdateSorveteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSorveteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSorveteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
