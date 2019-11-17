import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {Course} from "../../../models/course";
import {Discussions} from "../../../models/discussions";
import {ActivatedRoute} from "@angular/router";
import {UserService} from '../../../services/user.service';
// --------------------------------------------------------------------------------------------------------------------- DISCUSSION HOMEPAGE

@Component({
  selector: 'app-discussionhome',
  templateUrl: './discussionhome.component.html',
  styleUrls: ['./discussionhome.component.css']
})
export class DiscussionhomeComponent implements OnInit {

  discussionList: Array<Discussions>;
  currentStudent: User;
  private studentId: string;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.currentStudent = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')){
        this.studentId = params.get('id');
      }

      if(this.studentId || this.currentStudent|| true) {
        this.getAllDiscussions();
      }
    });
  }


  getAllDiscussions(){
    this.userService.getAllDiscussions().subscribe(data => {
      this.discussionList = data;
    });
  }


}
