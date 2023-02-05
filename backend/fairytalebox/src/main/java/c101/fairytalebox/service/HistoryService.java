package c101.fairytalebox.service;

import c101.fairytalebox.domain.History;
import c101.fairytalebox.dto.GetHistoryDto;

import java.util.List;

public interface HistoryService {
    public List<History> getHistory();
}
