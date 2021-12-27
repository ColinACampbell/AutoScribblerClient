import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScribberAddDefinitionDialogComponent } from './scribber-add-definition-dialog.component';

describe('ScribberAddDefinitionDialogComponent', () => {
  let component: ScribberAddDefinitionDialogComponent;
  let fixture: ComponentFixture<ScribberAddDefinitionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScribberAddDefinitionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScribberAddDefinitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
