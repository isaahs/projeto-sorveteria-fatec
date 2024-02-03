import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorveteDetailsComponent } from './sorvete-details.component';

describe('SorveteDetailsComponent', () => {
  let component: SorveteDetailsComponent;
  let fixture: ComponentFixture<SorveteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorveteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorveteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
