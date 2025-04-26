package com.example.backend.repository;
import com.example.backend.model.Course;
import com.example.backend.model.RegisterCourse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface RegisterCourseRepository extends JpaRepository<RegisterCourse, Long> {
    @Query("SELECT rc.course FROM RegisterCourse rc WHERE rc.student.id = :studentId")
    Page<Course> findCoursesByStudentId(@Param("studentId") Long studentId, Pageable pageable);

    boolean existsByStudentIdAndCourseId(Long studentId, Long courseId);
}
