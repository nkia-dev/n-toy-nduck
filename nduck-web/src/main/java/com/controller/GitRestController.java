package com.controller;

import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.domain.posts.Posts;
import com.service.PostsService;

@RestController
@RequestMapping("git")
public class GitRestController {
	
	@Autowired
	private PostsService postsService;
	
	@GetMapping("/sample")
	public Stream<Posts> getSamples() {
		return postsService.findAll();
	}
	
}
