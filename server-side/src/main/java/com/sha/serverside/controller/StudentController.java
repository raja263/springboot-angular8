package com.sha.serverside.controller;

import com.sha.serverside.model.*;
import com.sha.serverside.service.CourseService;
import com.sha.serverside.service.CourseStudentService;
import com.sha.serverside.service.DiscussionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class StudentController {

    @Autowired
    private CourseStudentService courseStudentService;

    @Autowired
    private DiscussionService discussionStudentService;

    @Autowired
     private CourseService courseService;

    @GetMapping("/api/student/courses/{studentId}")
    public ResponseEntity<?> findAllCoursesOfStudent(@PathVariable Long studentId){
        List<Course> courseList =
                courseStudentService.findAllCoursesOfStudent(studentId).stream()
                        .map(cs -> cs.getCourse())
                        .collect(Collectors.toList());
        return new ResponseEntity<>(courseList, HttpStatus.OK);
    }

    @PostMapping("/api/user/discussionpost/")
    public ResponseEntity<?> submitDiscussion(@RequestBody Discussions discussion){
        return new ResponseEntity<>(discussionStudentService.saveDiscussion(discussion), HttpStatus.CREATED);
    }

    @GetMapping("/api/user/discussions")
    public ResponseEntity<?> getAllDiscussions(){
            List<Discussions> discussionsList =
                    discussionStudentService.getAllDiscussions();
            return new ResponseEntity<>(discussionsList, HttpStatus.OK);
        }

    @GetMapping("/api/user/discussions/{discId}")
    public ResponseEntity<?> getDiscussionById(@PathVariable Long discId){
        Discussions discussion =
                discussionStudentService.findByDiscussionID(discId);
        return new ResponseEntity<>(discussion, HttpStatus.OK);
    }


    @GetMapping("/api/user/discussions/comments/{discId}")
    public ResponseEntity<?> getAllComments(@PathVariable Long discId){
        List<Comments> commentsList =
                discussionStudentService.findAllCommentsByDiscussionID(discId);
        return new ResponseEntity<>(commentsList, HttpStatus.OK);
    }

    @PostMapping("/api/student/enroll")
    public ResponseEntity<?> enroll(@RequestBody CourseStudent courseStudent){
        return new ResponseEntity<>(courseStudentService.saveCourseStudent(courseStudent), HttpStatus.CREATED);
    }
}
