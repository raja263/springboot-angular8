package com.sha.serverside.service;

import com.sha.serverside.model.Comments;
import com.sha.serverside.model.Discussions;
import com.sha.serverside.repository.CommentRepository;
import com.sha.serverside.repository.DiscussionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DiscussionServiceImpl implements DiscussionService{
    @Autowired
    private DiscussionRepository discussionRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Override
    public List<Discussions> getAllDiscussions() {
        return discussionRepository.findAll();
    }
    @Override
    public Discussions findByDiscussionID(Long discId) { return discussionRepository.findByDiscussionID(discId);}

    @Override
    public List<Comments> findAllCommentsByDiscussionID(Long discId) {
        return commentRepository.findAllCommentsByDiscussionID(discId);
    }
}
