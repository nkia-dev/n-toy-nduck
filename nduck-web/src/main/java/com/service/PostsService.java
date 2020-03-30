package com.service;

import java.util.stream.Stream;


import com.exception.NotFoundException;
import org.springframework.stereotype.Service;

import com.domain.posts.Posts;
import com.domain.posts.PostsRepository;

import lombok.AllArgsConstructor;
import org.springframework.transaction.annotation.Transactional;

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
		Posts post = postsRepository.save(posts);

		return post;
	}

	/**
	 * @Transactional(readOnly = true) :
	 * 트랜잭션 범위는 유지하되, 조회 기능만 남겨두어 조회 속도가 개선되기 때문에 특별히 등록/수정/삭제 기능이 없는 메소드에선 사용하시는걸 추천.
	 */
	@Transactional(readOnly = true)
	public Posts findOnePostById(Long id) {
		Posts post = postsRepository.findPostById(id);
		if (post == null) {
			throw new NotFoundException("Not Found Id - " + id);
		}
		return post;
	}

	public Posts updatePostById(Long id, Posts newPost) {
		Posts oldPost = postsRepository.findPostById(id);
		if (oldPost == null) {
			throw new NotFoundException("Not Found Id - " + id);
		}

		oldPost.setTitle(newPost.getTitle());
		oldPost.setContent(newPost.getContent());
		oldPost.setAuthor(newPost.getAuthor());

		return oldPost;
	}
}
