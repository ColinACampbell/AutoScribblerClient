import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScribblerComponent } from './scribbler.component';

describe('ScribblerComponent', () => {
  let component: ScribblerComponent;
  let fixture: ComponentFixture<ScribblerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScribblerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScribblerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
