package c101.fairytalebox.repository;

import c101.fairytalebox.domain.Word;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordRepository extends JpaRepository<Word,Long> {
}
