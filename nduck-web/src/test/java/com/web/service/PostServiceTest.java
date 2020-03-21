package com.web.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.domain.posts.PostsRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.domain.posts.Posts;
import com.service.PostsService;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PostServiceTest {
	@Autowired
	private PostsService postsService;

	// 테스트 진행 중에 선행되어야 할 작업
	// 단어 뜻 그대로 실질직인 테스트 로직 돌기 전에 먼저 실행됨
	@Before
	public void 포스트_저장() {
		Posts post = 포스트_엔티티_생성();
		postsService.saveOnePost(post);
	}

	private Posts 포스트_엔티티_생성() {
		Posts post = Posts.builder()
				.id(1L)
				.title("토이프로젝트")
				.author("Gongdel")
				.content("n-duck")
				.build();
		return post;
	}

	@Test
	public void 포스트_전체검색_테스트() {
		// Given
		Stream<Posts> allDesc = postsService.findAll();
		List<Posts> posts = allDesc.collect(Collectors.toList());

		// When
		int size = posts.size();

		// Then
		///  테스트 데이터 5개
		Assert.assertTrue(size == 5);
		Assert.assertFalse(size == 4);
	}

	@Test
	public void 포스트_ID조회_테스트() {
		// Given
		Posts post = 포스트_엔티티_생성();

		// When
		Posts postById = postsService.findOnePostById(post.getId());

		// Then
		assertThat(post.getAuthor()).isEqualTo(postById.getAuthor());
		assertThat(post.getContent()).isEqualTo(postById.getContent());
		assertThat(post.getTitle()).isEqualTo(postById.getTitle());

	}
}
