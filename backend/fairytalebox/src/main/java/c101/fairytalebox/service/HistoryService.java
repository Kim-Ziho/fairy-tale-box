package c101.fairytalebox.service;

import c101.fairytalebox.domain.History;
import c101.fairytalebox.dto.HistoryRequestDto;

import java.util.List;
import java.util.Optional;

public interface HistoryService {
    public List<History> getHistory();

    public Optional<History> getHistoryById(Long id);

    public void createHistory(HistoryRequestDto request);
}
