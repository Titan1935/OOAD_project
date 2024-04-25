package net.javaguides.springboot.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Question1")
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "question")
	private String question;

	@Column(name = "option1")
	private String option1;

	@Column(name = "option2")
	private String option2;

	@Column(name = "option3")
	private String option3;

	@Column(name = "option4")
	private String option4;

	@Column(name = "correct")
	private String correct;

	@Transient
	private String givenAnswer;
	
}
