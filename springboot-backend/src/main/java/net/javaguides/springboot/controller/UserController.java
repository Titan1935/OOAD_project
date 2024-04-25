package net.javaguides.springboot.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Course;
import net.javaguides.springboot.model.Question;
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.CourseRepository;
import net.javaguides.springboot.repository.UserRepo;



@CrossOrigin(origins = "http://localhost:4201")
@RestController
@RequestMapping("/api/v2/")
public class UserController{

	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private UserRepo repo;
	// private Logger logger = LoggerFactory.getLogger(CourseController.class);
	// get all Courses
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User userData){
  
  
	  System.out.println(userData);
  
	  
  
	  User user=repo.findByUserId(userData.getUserId());
  
	   if(user.getPassword().equals(userData.getPassword()))
	   return ResponseEntity.ok(user);
  
	  return (ResponseEntity<?>) ResponseEntity.internalServerError();
  
	} 
  
	@PostMapping("/register")
  public ResponseEntity<?> registerUser(@RequestBody User userData) {
	  User user = repo.findByUserId(userData.getUserId());
	  if (user != null && user.getUserId().equals(userData.getUserId())) {
		  
		  return ResponseEntity.internalServerError().build();
	  } else {
		  
		  return ResponseEntity.ok(repo.save(userData));
	  }
  }

	@GetMapping("/courses")
	public List<Course> getAllCourses(){
		return courseRepository.findAll();
	}		
	
	// // create Course rest api
	// @PostMapping("/courses")
	// public Long createCourse(@RequestBody Course course) {
        // 	return courseRepository.save(course).getId();
        // }
        
        // get Course by id rest api
        @GetMapping("/courses/{id}")
        public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
            Course Course = courseRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Course not exist with id :" + id));
            return ResponseEntity.ok(Course);
        }
        
        @PostMapping("/courses/send")
        public Long listCourses(@RequestBody List<Question> questions){
            Long result = 0L;
            for(Question question : questions){
                if(question.getQuestion() != null){
    
                }
                String Correct = question.getCorrect();
                String given = question.getGivenAnswer();
                if(Correct.equals(given)){
                    result++;
                }
            }
            return result;
        }
	// update Course rest api
	
	// @PutMapping("/courses/{id}")
	// public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course course){
		
	// 	Course updatedCourse = courseRepository.save(course);
	// 	return ResponseEntity.ok(updatedCourse);
	// }
	
	// delete Course rest api
	// @DeleteMapping("/courses/{id}")
	// public ResponseEntity<Map<String, Boolean>> deleteCourse(@PathVariable Long id){
		
	// 	Course Course = courseRepository.findById(id)
	// 			.orElseThrow(() -> new ResourceNotFoundException("Course not exist with id :" + id));
		
	// 	courseRepository.delete(Course);
	// 	Map<String, Boolean> response = new HashMap<>();
	// 	response.put("deleted", Boolean.TRUE);
	// 	return ResponseEntity.ok(response);
	// }
	

	
}
