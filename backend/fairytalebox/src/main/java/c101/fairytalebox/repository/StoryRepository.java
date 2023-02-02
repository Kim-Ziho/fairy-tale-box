package c101.fairytalebox.repository;

import c101.fairytalebox.domain.Story;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryRepository extends JpaRepository<Story, Long> {
    Story save(Story story);
}
