import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinecoachingComponent } from './onlinecoaching.component';

describe('OnlinecoachingComponent', () => {
  let component: OnlinecoachingComponent;
  let fixture: ComponentFixture<OnlinecoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinecoachingComponent]
    });
    fixture = TestBed.createComponent(OnlinecoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
