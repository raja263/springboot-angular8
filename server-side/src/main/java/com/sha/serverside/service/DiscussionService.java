package com.sha.serverside.service;

import com.sha.serverside.model.CourseStudent;
import com.sha.serverside.model.Discussions;

import java.util.List;

public interface DiscussionService {
    List<Discussions> getAllDiscussions();
}
