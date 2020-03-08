package com.service;

import java.util.stream.Stream;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.domain.posts.Posts;
import com.domain.posts.PostsRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class PostsService {

	private PostsRepository postsRepository;

	public Stream<Posts> findAll() {
		return postsRepository.findAll().stream();
	}
}
