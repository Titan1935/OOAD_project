package net.javaguides.springboot.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Quiz1")
public class Quiz {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "title")
	private String title;

	@Column(name = "marksScored")
	private int marksScored;
	
	@Column(name = "difficulty")
	private String difficulty;

	@Column(name = "timeLimit")
	private int timeLimit;

	@Column(name = "rewardPoints")
	private int rewardPoints;

    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_quiz_id", referencedColumnName = "id")
	private List<Question> questions;
}
