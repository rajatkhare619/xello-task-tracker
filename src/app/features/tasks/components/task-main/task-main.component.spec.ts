import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMainComponent } from './task-main.component';

describe('TaskMainComponent', () => {
  let component: TaskMainComponent;
  let fixture: ComponentFixture<TaskMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskMainComponent]
    });
    fixture = TestBed.createComponent(TaskMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
