package c101.fairytalebox.repository;

import c101.fairytalebox.domain.WordResult;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordResultRepository extends JpaRepository<WordResult,Long> {
}

