package com.sha.serverside.service;

import com.sha.serverside.model.Comments;
import com.sha.serverside.model.Discussions;
import com.sha.serverside.repository.CommentRepository;
import com.sha.serverside.repository.DiscussionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.text.SimpleDateFormat;
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

    @Override
    public Discussions saveDiscussion(Discussions discussion) {
//        try {
////            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
////            java.util.Date date = sdf.parse(discussion.getTimestamp());
////            java.sql.Date sqlDate = new Date(date.getTime());
////            System.out.println(sqlDate);
////            discussion.setTimestamp(sqlDate);
//        }catch (Exception e) {
//            System.out.println(e);
//        }
        return discussionRepository.save(discussion);
    }
}
