import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiControlComponent } from './si-control.component';

describe('SiControlComponent', () => {
  let component: SiControlComponent;
  let fixture: ComponentFixture<SiControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
