package com.sha.serverside.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;

@Data
@Entity
@Table(name="discussions")
public class Discussions implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long discussionID;

    //@Column(name="discussionID")
    //private int discussionID;

    @Column(name="userID")
    private Long userID;

    @Column(name="title")
    private String title;

    @Column(name="body")
    private String body;

    @Column(name="timestamp")
    private Timestamp timestamp;

    //@ManyToOne(fetch = FetchType.EAGER)
    //@JoinColumn(name="instructor_id", referencedColumnName = "id")
    //private User instructor;
}
