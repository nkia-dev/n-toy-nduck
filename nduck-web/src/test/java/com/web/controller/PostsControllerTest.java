package com.web.controller;

import com.domain.posts.Posts;
import com.service.PostsService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class PostsControllerTest {
	@Autowired
	private MockMvc mvc;

	@MockBean
	private PostsService postsService;

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
	public void 포스트_특정글조회_테스트() throws Exception {
		// Given
		Posts givenPost = 포스트_엔티티_생성();
		given(postsService.findOnePostById(1L)).willReturn(givenPost);

		// When & Then
		this.mvc.perform(get("/posts/{id}", 1))
				.andExpect(status().isOk())
				.andExpect(content().json("{\"id\":1,\"title\":\"토이프로젝트\",\"content\":\"n-duck\",\"author\":\"Gongdel\"}"));
	}
}
