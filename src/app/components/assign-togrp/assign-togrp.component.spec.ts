import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToGroupComponent } from './assign-togrp.component';

describe('AssignTogrpComponent', () => {
  let component: AssignToGroupComponent;
  let fixture: ComponentFixture<AssignToGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignToGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
