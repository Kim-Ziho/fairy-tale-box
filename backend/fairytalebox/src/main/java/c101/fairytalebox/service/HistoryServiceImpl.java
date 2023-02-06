package c101.fairytalebox.service;

import c101.fairytalebox.domain.History;
import c101.fairytalebox.dto.HistoryRequestDto;
import c101.fairytalebox.repository.HistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class HistoryServiceImpl implements HistoryService {

    private final HistoryRepository historyRepository;

    @Override
    public List<History> getHistory() {
        return historyRepository.findAll();
    }

    public Optional<History> getHistoryById(Long id){
        return historyRepository.findById(id);
    }

//    public Long createHistory(HistoryRequestDto request){
//        History history = HistoryRepository.save(request);
//    }
}
