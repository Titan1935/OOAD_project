package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Course;
import net.javaguides.springboot.model.Question;
import net.javaguides.springboot.repository.CourseRepository;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RestController
@RequestMapping("/api/v1/")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    // Factory Method to create courses based on user preferences
    public Course createCourse(String courseType) {
        CourseFactory factory;
        if ("Java".equals(courseType)) {
            factory = new JavaCourseFactory();
        } else if ("Python".equals(courseType)) {
            factory = new PythonCourseFactory();
        } else {
            throw new IllegalArgumentException("Invalid course type");
        }
        return factory.createCourse();
    }

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @PostMapping("/courses")
    public Long createCourse(@RequestBody Course course) {
        return courseRepository.save(course).getId();
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not exist with id :" + id));
        return ResponseEntity.ok(course);
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course course) {
        Course updatedCourse = courseRepository.save(course);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCourse(@PathVariable Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not exist with id :" + id));
        courseRepository.delete(course);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/courses/send")
    public Long listCourses(@RequestBody List<Question> questions) {
        Long result = 0L;
        for (Question question : questions) {
            if (question.getQuestion() != null) {
                String correct = question.getCorrect();
                String given = question.getGivenAnswer();
                if (correct.equals(given)) {
                    result++;
                }
            }
        }
        return result;
    }

    // Factory Method pattern
    interface CourseFactory {
        Course createCourse();
    }

    // Concrete implementation of CourseFactory for creating different types of courses
    class JavaCourseFactory implements CourseFactory {
        @Override
        public Course createCourse() {
            return new JavaCourse();
        }
    }

    class PythonCourseFactory implements CourseFactory {
        @Override
        public Course createCourse() {
            return new PythonCourse();
        }
    }

    // Course interface and its concrete implementations
    interface Course {
        // Define methods common to all courses
    }

    class JavaCourse implements Course {
        // Implementation specific to Java course
    }

    class PythonCourse implements Course {
        // Implementation specific to Python course
    }
}
