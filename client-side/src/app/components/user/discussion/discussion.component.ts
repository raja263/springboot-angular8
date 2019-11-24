import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {Course} from "../../../models/course";
import {Discussions} from "../../../models/discussions";
import {Comments} from "../../../models/comments";
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
  commentInput: string;


  constructor(private router: ActivatedRoute, private userService: UserService) {
    this.currentStudent = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
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

  submitComment(value: string) {

    let comment = new Comments();
    comment.discussionID = this.discussionID;
    comment.userID = this.currentStudent.id;
    comment.timestamp = Date.now();
    comment.body = value;
    // discuss.body = this.comm;
    this.userService.submitComment(comment).subscribe(data => {
      // Do not remove next line. Error suppression
      // @ts-ignore
      this.router.navigate(['/discussionhome']);
    });
  }


  // test() {
  //   let discuss = new Discussions();
  //   discuss.discussionID = 88;
  //   discuss.body = "hello raha";
  //   this.userService.submitDiscussion(discuss).subscribe(data => {
  //     this.router.navigate(['/discussionhome']);
  //   });
  // }

  private getComments() {
    this.userService.findCommentsByDiscussionID(this.discussionID).subscribe(data => {
      this.commentContent = data;
    });
  }
}

