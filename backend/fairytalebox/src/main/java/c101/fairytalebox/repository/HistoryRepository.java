package c101.fairytalebox.repository;

import c101.fairytalebox.domain.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface HistoryRepository extends JpaRepository<History,Long> {
    History save(History history);
}
