package com.domain;

import java.time.LocalDateTime;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;

@Getter
@MappedSuperclass // JPA Entity 클래스들이 BaseTimeEntity를 상속할 경우, 필드들도 컬럼으로 인식하도록 해줌
@EntityListeners(AuditingEntityListener.class) // BaseTimeEntity 클래스에 Auditing 기능을 포함
public abstract class BaseTimeEntity {

    @CreatedDate // Entity가 생성되어 저장될 떄 시간이 자동 저장
    private LocalDateTime createdDate;

    @LastModifiedDate // 조회한 Entity의 값을 변경할 때 자동 저장
    private LocalDateTime modifiedDate;

}