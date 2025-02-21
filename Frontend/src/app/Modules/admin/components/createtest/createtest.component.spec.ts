import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetestComponent } from './createtest.component';

describe('CreatetestComponent', () => {
  let component: CreatetestComponent;
  let fixture: ComponentFixture<CreatetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatetestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
