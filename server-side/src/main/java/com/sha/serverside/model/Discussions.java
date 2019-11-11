package com.sha.serverside.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="discussions")
public class Discussions implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int discussionID;

    //@Column(name="discussionID")
    //private int discussionID;

    @Column(name="userID")
    private int userID;

    @Column(name="title")
    private String title;

    @Column(name="body")
    private String body;

    @Column(name="timestamp")
    private String timestamp;

    //@ManyToOne(fetch = FetchType.EAGER)
    //@JoinColumn(name="instructor_id", referencedColumnName = "id")
    //private User instructor;
}
