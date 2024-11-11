import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementComponentComponent } from './virement-component.component';

describe('VirementComponentComponent', () => {
  let component: VirementComponentComponent;
  let fixture: ComponentFixture<VirementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirementComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
