import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionpostComponent } from './discussionpost.component';

describe('DiscussionpostComponent', () => {
  let component: DiscussionpostComponent;
  let fixture: ComponentFixture<DiscussionpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
