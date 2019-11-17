import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {Course} from "../../../models/course";
import {Discussions} from "../../../models/discussions";
import {ActivatedRoute} from "@angular/router";
import {UserService} from '../../../services/user.service';
// ----------------------------------------------------------------------------------------------------------------- DISCUSSION CONTENT PAGE
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  currentStudent: User;
  discussionContent: any;
  commentContent: any;
  currentDiscussion: Discussions;
  private discussionID: string;


  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.currentStudent = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.discussionID = params.get('id');
      }

      if(this.discussionID || true) {
        this.getDiscussion();
        this.getComments();
      }
    });
  }

  getDiscussion(){
    if(!this.discussionID){
      this.discussionID = this.currentStudent.id.toString();
    }
    this.userService.findByDiscussionID(this.discussionID).subscribe(data => {
      this.discussionContent = data;
    });
  }

  private getComments() {
    this.userService.findCommentsByDiscussionID(this.discussionID).subscribe(data => {
      this.commentContent = data;
    });
  }
}

