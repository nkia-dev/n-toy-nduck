package com.domain.posts;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.domain.BaseTimeEntity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 원칙적으로 Entity는 불변성 유지를 위해 접근을 최소화해야 함
 * 따라서 아래의 메소드를 사용해서 접근을 최소화한다.
 */
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Posts extends BaseTimeEntity {

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 500, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    private String author;

    /**
     * 자바빈 패턴의 단점을 보완하기 위해 기본적으로 빌터 패턴을 사용하자.
     * 또한 생성자의 인자값이 유동적일 경우, 정적 팩토리 메소드를 사용하자.
     * 참조) https://github.com/gonghojin/gonghojin.github.io/blob/master/_posts/book/java/effectiveJava/2019-09-10-effectiveJava1.md
     */
    @Builder
    public Posts(Long id, String title, String content, String author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Posts posts = (Posts) o;

        if (id != null ? !id.equals(posts.id) : posts.id != null) return false;
        if (title != null ? !title.equals(posts.title) : posts.title != null) return false;
        if (content != null ? !content.equals(posts.content) : posts.content != null) return false;
        return author != null ? author.equals(posts.author) : posts.author == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (content != null ? content.hashCode() : 0);
        result = 31 * result + (author != null ? author.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Posts{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}
