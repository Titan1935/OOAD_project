package net.javaguides.springboot.model;


import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "course1")
@AllArgsConstructor
@NoArgsConstructor
public class Course {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "image")
	private String image; // Change the type to String

	@Column(name = "title")
	private String title;

	@Column(name = "instructor")
	private String instructor;
	
	@Column(name = "courseMaterial")
	private String courseMaterial;

	@Column(name = "courseOutcomes")
	private String courseOutcome;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_cou_id", referencedColumnName = "id")
	private List<Quiz> quizs;
	
	// Getter and setter for the image field
 
}
