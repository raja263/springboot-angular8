import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionhomeComponent } from './discussionhome.component';

describe('DiscussionhomeComponent', () => {
  let component: DiscussionhomeComponent;
  let fixture: ComponentFixture<DiscussionhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
