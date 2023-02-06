package c101.fairytalebox.controller;


import c101.fairytalebox.domain.History;
import c101.fairytalebox.domain.Member;
import c101.fairytalebox.domain.Story;
import c101.fairytalebox.dto.*;
import c101.fairytalebox.repository.HistoryRepository;
import c101.fairytalebox.repository.MemberRepository;
import c101.fairytalebox.repository.StoryRepository;
import c101.fairytalebox.service.HistoryService;
import c101.fairytalebox.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class HistoryController {
    private final HistoryService historyService;
    private final MemberRepository memberRepository;
    private final StoryRepository storyRepository;

    @GetMapping("/history")
    public ResponseEntity<List<GetHistoryDto>> getHistory(){
        List<History> histories = historyService.getHistory();
        List<GetHistoryDto> getHistory = histories.stream()
                .map(history -> {
                    GetHistoryDto newDto = new GetHistoryDto();
                    newDto.historyId=history.getId();
                    newDto.studyDate=history.getStudyDate();
                    newDto.starPoint=history.getStarPoint();
                    newDto.story=history.getStory().getTitle();

                    return newDto;
                })
                .collect(Collectors.toList());
        return ResponseEntity.ok().body(getHistory);
    }

    @GetMapping("/history/{id}")
    public ResponseEntity<GetHistoryDetailDto> getHistoryDetail(@PathVariable Long id){
        Optional<History> history = historyService.getHistoryById(id);
        System.out.println(history);
        GetHistoryDetailDto historyDetail = new GetHistoryDetailDto();
        historyDetail.historyId = id;
        historyDetail.wordResult = history.get().getWordResults().stream()
                .map(wordResult -> {
                    WordResultDto newDto = new WordResultDto();
                    newDto.audio_path = wordResult.getAudioPath();
                    newDto.is_correct = wordResult.getIsCorrect();
                    newDto.word_name = wordResult.getWord().getWordName();

                    return newDto;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(historyDetail);
    }

//    @PostMapping("/history")
//    public ResponseEntity createHistory(@RequestBody HistoryRequestDto historyRequestDto){
//        Optional<Member> member = memberRepository.findById(historyRequestDto.getMember_id());
//        Optional<Story> story = storyRepository.findById(historyRequestDto.getStory_id());
//        History history = new History();
//        history.member = member;
//
//        HistoryRepository.save()
//
//
//        return ResponseEntity.ok().body(HttpStatus.OK);
//    }

}
