package c101.fairytalebox.repository;

import c101.fairytalebox.domain.Story;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StoryRepository extends JpaRepository<Story, Long> {

    Optional<Story> findById(Long id);
    List<Story> findAll();
    Story save(Story story);
}
