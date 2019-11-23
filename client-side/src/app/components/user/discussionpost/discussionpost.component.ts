import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user';
import {Discussions} from '../../../models/discussions';
import {Router} from '@angular/router';
import DateTimeFormat = Intl.DateTimeFormat;


@Component({
  selector: 'app-discussionpost',
  templateUrl: './discussionpost.component.html',
  styleUrls: ['./discussionpost.component.css']
})
export class DiscussionpostComponent implements OnInit {
  private errorMessage: string;
  discussion: Discussions = new Discussions();
  currentUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  submitDiscussion(){
    this.discussion.userID = this.currentUser.id;
    // this.discussion.timestamp = this.time.toLocaleString().slice(0, 10) +' '+ this.time.toLocaleString().slice(11,20)
    this.discussion.timestamp = Date.now();
    this.userService.submitDiscussion(this.discussion).subscribe(data => {
      this.router.navigate(['/discussionhome']);
    }, err => {
      this.errorMessage = 'Something wrong has happened';
    });
  }

}
