package com.web.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.domain.posts.PostsRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.domain.posts.Posts;
import com.service.PostsService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PostServiceTest {
	@Autowired
	private PostsService postsService;

	@Autowired
	private PostsRepository postsRepository;

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
}
