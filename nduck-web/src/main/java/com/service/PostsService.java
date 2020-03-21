package com.service;

import java.util.stream.Stream;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.domain.posts.Posts;
import com.domain.posts.PostsRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
// 필드 DI보다는 생성자 DI를 사용하자.
// Why?) https://developerhjg.tistory.com/205
@AllArgsConstructor
public class PostsService {

	private PostsRepository postsRepository;

	public Stream<Posts> findAll() {
		return postsRepository.findAll().stream();
	}

	public Posts saveOnePost(Posts posts) {
		if (posts == null) {
			return posts;
		}
		Posts post = postsRepository.save(posts);

		return post;
	}

	public Posts findOnePostById(Long id) {
		Posts post = postsRepository.findPostById(id);
		return post;
	}
}
