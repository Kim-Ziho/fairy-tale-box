package c101.fairytalebox.service;

import c101.fairytalebox.domain.*;
import c101.fairytalebox.dto.*;
import c101.fairytalebox.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class HistoryServiceImpl implements HistoryService {

    private final HistoryRepository historyRepository;
    private final MemberRepository memberRepository;
    private final StoryRepository storyRepository;
    private final WordRepository wordRepository;
    private final WordResultRepository wordResultRepository;

    @Override
    public List<History> getHistory(Long id) {
        return historyRepository.findAllByMember_Id(id);
    }

    @Override
    public Optional<History> getHistoryById(Long id){
        return historyRepository.findById(id);
    }

    @Override
    public Long createHistory(HistoryRequestDto request, Long id){
        Member member = memberRepository.findById(id).orElse(null);
        System.out.println(request.getStory_id());
        Story story = storyRepository.findById(request.getStory_id()).orElse(null);
        System.out.println("####");
        CreateHistoryDto createHistoryDto = new CreateHistoryDto();
        createHistoryDto.member = member;
        createHistoryDto.story = story;
        createHistoryDto.starPoint= 0;
        createHistoryDto.studyDate=request.getStudyDate();

        History newHistory = historyRepository.save(createHistoryDto.toEntity());

        return newHistory.getId();

    }

    @Override
    public void setStarPoint(Long id, StarPointDto starPointDto){
        History history = historyRepository.findById(id).orElse(null);
        history.modifyStarPoint(starPointDto.getStarPoint());
        historyRepository.save(history);
    }

    @Override
    public void createWordResult(Long word_id, WordResultRequestDto wordResultRequestDto) {
        History history = historyRepository.findById(wordResultRequestDto.getHistoryId()).orElse(null);
        Word word = wordRepository.findById(word_id).orElse(null);
        CreateWordResultDto createWordResultDto = new CreateWordResultDto();
        createWordResultDto.setHistory(history);
        createWordResultDto.setWord(word);
        createWordResultDto.setAudioPath(wordResultRequestDto.getAudioPath());
        createWordResultDto.setIsCorrect(wordResultRequestDto.getIsCorrect());

        wordResultRepository.save(createWordResultDto.toEntity());

    }

    @Transactional
    @Override
    public Integer getstarpoint(Long history_id) {
        History history = historyRepository.findById(history_id).orElse(null);
        long score = history.getWordResults().stream().filter(WordResult::getIsCorrect).count();
        int starpoint;
        if(score>=6){
            starpoint=3;
        } else if(score>=3){
            starpoint=2;
        } else{
            starpoint=1;
        }
        history.modifyStarPoint(starpoint);
        historyRepository.save(history);

        return starpoint;
    }
}
