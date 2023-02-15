package c101.fairytalebox.service;

import c101.fairytalebox.domain.History;
import c101.fairytalebox.dto.HistoryRequestDto;
import c101.fairytalebox.dto.StarPointDto;
import c101.fairytalebox.dto.WordResultDto;
import c101.fairytalebox.dto.WordResultRequestDto;

import java.util.List;
import java.util.Optional;

public interface HistoryService {
    public List<History> getHistory(Long id);

    public Optional<History> getHistoryById(Long id);

    public Long createHistory(HistoryRequestDto request, Long id);

    public void setStarPoint(Long id, StarPointDto starPointDto);

    public void createWordResult(Long word_id,WordResultRequestDto wordResultRequestDto);

    public Integer getstarpoint(Long history_id);
}
