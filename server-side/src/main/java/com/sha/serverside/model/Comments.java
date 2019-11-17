package com.sha.serverside.model;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="comments")
public class Comments implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentID;

    @Column(name="discussionID")
    private Long discussionID;

    @Column(name="userID")
    private Long userID;

    @Column(name="body")
    private String body;

    @Column(name="timestamp")
    private String timestamp;

    //@ManyToOne(fetch = FetchType.EAGER)
    //@JoinColumn(name="instructor_id", referencedColumnName = "id")
    //private User instructor;
}
