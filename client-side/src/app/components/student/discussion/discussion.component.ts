import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent {

  // studentId: string;
  // currentStudent: User;
  // courseList: Array<Course>;
  // discussionList: Array<Discussions>;
  //
  // constructor(private route: ActivatedRoute, private userService: UserService) {
  //   this.currentStudent = JSON.parse(localStorage.getItem("currentUser"));
  // }
  //
  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     if(params.has('id')){
  //       this.studentId = params.get('id');
  //     }
  //
  //     if(this.studentId || this.currentStudent) {
  //       this.getAllDiscussions();
  //     }
  //   });
  // }
  //
  // getAllDiscussions(){
  //   this.userService.getAllDiscussions().subscribe(data => {
  //     this.discussionList = data;
  //   });
  // }
  /*
    findAllCoursesOfStudent(){
      if(!this.studentId){
        this.studentId = this.currentStudent.id.toString();
      }
      this.userService.findAllCoursesOfStudent(this.studentId).subscribe(data => {
        this.courseList = data;
      });
    }
  */
}
