import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedDocumentComponent } from './added-document.component';

describe('AddedDocumentComponent', () => {
  let component: AddedDocumentComponent;
  let fixture: ComponentFixture<AddedDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
