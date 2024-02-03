import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorveteListComponent } from './sorvete-list.component';

describe('SorveteListComponent', () => {
  let component: SorveteListComponent;
  let fixture: ComponentFixture<SorveteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorveteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorveteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
