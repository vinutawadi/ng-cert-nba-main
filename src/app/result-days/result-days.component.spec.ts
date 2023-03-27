import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDaysComponent } from './result-days.component';

describe('ResultDaysComponent', () => {
  let component: ResultDaysComponent;
  let fixture: ComponentFixture<ResultDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
