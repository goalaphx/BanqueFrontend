import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitComponentComponent } from './retrait-component.component';

describe('RetraitComponentComponent', () => {
  let component: RetraitComponentComponent;
  let fixture: ComponentFixture<RetraitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetraitComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetraitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
