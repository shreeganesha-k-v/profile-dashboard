import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiJdAnalyzerComponent } from './ai-jd-analyzer';

describe('AiJdAnalyzerComponent', () => {
  let component: AiJdAnalyzerComponent;
  let fixture: ComponentFixture<AiJdAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiJdAnalyzerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AiJdAnalyzerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
