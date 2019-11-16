package com.sha.serverside.service;

import com.sha.serverside.model.Discussions;

import java.util.List;
import java.util.Optional;

public interface DiscussionService {
    List<Discussions> getAllDiscussions();
    Discussions findByDiscussionID(Long discId);
}
