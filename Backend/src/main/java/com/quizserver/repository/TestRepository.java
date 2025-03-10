package com.quizserver.repository;

import com.quizserver.dto.TestResultDTO;
import com.quizserver.entities.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestRepository  extends JpaRepository<Test, Long> {

}
