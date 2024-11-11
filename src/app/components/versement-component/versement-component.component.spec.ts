import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementComponentComponent } from './versement-component.component';

describe('VersementComponentComponent', () => {
  let component: VersementComponentComponent;
  let fixture: ComponentFixture<VersementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersementComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
