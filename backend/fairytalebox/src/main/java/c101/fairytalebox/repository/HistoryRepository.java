package c101.fairytalebox.repository;

import c101.fairytalebox.domain.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface HistoryRepository extends JpaRepository<History,Long> {
    History save(History history);

    List<History> findAllByMember_Id(Long member_id);

}
