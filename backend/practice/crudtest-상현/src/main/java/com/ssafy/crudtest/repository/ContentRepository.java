package com.ssafy.crudtest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ssafy.crudtest.entity.Content;

import java.util.List;

public interface ContentRepository extends JpaRepository<Content, Integer> {

    public List<Content> findTop1000ByOrderByUidDesc();
}
