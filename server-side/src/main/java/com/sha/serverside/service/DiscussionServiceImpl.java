package com.sha.serverside.service;

import com.sha.serverside.model.CourseStudent;
import com.sha.serverside.model.Discussions;
import com.sha.serverside.repository.DiscussionRepository;
import com.sha.serverside.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DiscussionServiceImpl implements DiscussionService{
    @Autowired
    private DiscussionRepository discussionRepository;
    @Override
    public List<Discussions> getAllDiscussions() {
        return discussionRepository.findAll();
    }
}
