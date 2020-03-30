package com.web.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.domain.posts.Posts;
import com.service.PostsService;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
@RequestMapping("/posts")
public class PostsController {
	private  final PostsService postsService;

	@GetMapping("/{id}")
	public ResponseEntity<Posts> findByPost(@PathVariable Long id, Model model) {
		Posts post = postsService.findOnePostById(id);
		if (post == null) {
			ResponseEntity.badRequest().build();
		}

		return ResponseEntity.ok(post);
	}
}
