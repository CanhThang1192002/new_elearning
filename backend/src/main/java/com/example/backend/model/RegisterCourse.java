package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "REGISTER_COURSE",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"STUDENT_ID", "COURSE_ID"}, name = "UNIQUE_REGISTER")
        })
@Data
public class RegisterCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "STUDENT_ID", nullable = false)
    private User student;

    @ManyToOne
    @JoinColumn(name = "COURSE_ID", nullable = false)
    private Course course;

    @CreationTimestamp
    @Column(name = "CREATE_AT", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "UPDATED_AT")
    private LocalDateTime updatedAt;
}