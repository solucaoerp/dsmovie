package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dtos.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;

	/* paginated search list */
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable); /* the repository talks to the entity and returns the dto */
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}

	/* paginated search by Id */
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {

		/* TODO: treatment: see if the id exists */

		Movie result = repository.findById(id).get(); /* the repository talks to the entity and returns the dto */
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}
}
