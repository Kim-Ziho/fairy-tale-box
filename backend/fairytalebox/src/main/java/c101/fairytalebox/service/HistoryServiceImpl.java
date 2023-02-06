package c101.fairytalebox.service;

import c101.fairytalebox.domain.History;
import c101.fairytalebox.domain.Member;
import c101.fairytalebox.domain.Story;
import c101.fairytalebox.dto.HistoryRequestDto;
import c101.fairytalebox.dto.CreateHistoryDto;
import c101.fairytalebox.repository.HistoryRepository;
import c101.fairytalebox.repository.MemberRepository;
import c101.fairytalebox.repository.StoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class HistoryServiceImpl implements HistoryService {

    private final HistoryRepository historyRepository;
    private final MemberRepository memberRepository;
    private final StoryRepository storyRepository;

    @Override
    public List<History> getHistory() {
        return historyRepository.findAll();
    }

    public Optional<History> getHistoryById(Long id){
        return historyRepository.findById(id);
    }

    public void createHistory(HistoryRequestDto request){
        Member member = memberRepository.findById(request.getMember_id()).orElse(null);
        Story story = storyRepository.findById(request.getStory_id()).orElse(null);
        CreateHistoryDto createHistoryDto = new CreateHistoryDto();
        createHistoryDto.member = member;
        createHistoryDto.story = story;
        createHistoryDto.starPoint= request.getStarPoint();
        createHistoryDto.studyDate=request.getStudyDate();

        historyRepository.save(createHistoryDto.toEntity());

    }
}
