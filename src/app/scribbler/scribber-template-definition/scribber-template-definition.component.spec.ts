import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScribberTemplateDefinitionComponent } from './scribber-template-definition.component';

describe('ScribberTemplateDefinitionComponent', () => {
  let component: ScribberTemplateDefinitionComponent;
  let fixture: ComponentFixture<ScribberTemplateDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScribberTemplateDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScribberTemplateDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
