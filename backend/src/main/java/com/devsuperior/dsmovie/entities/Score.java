package com.devsuperior.dsmovie.entities;

public class Score {

	private ScorePK id = new ScorePK();
	private Double value;

	public Score() {
	}

	/* Associação (M:M) aqui! */
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}

	/* Associação (M:M) aqui! */
	public void setUser(User user) {
		id.setUser(user);
	}

	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
}