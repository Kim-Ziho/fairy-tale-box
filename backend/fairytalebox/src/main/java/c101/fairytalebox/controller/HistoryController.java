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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("api/history")
@RequiredArgsConstructor
public class HistoryController {
    private final HistoryService historyService;

    @GetMapping("")
    public ResponseEntity<List<GetHistoryDto>> getHistory(){
        List<History> histories = historyService.getHistory();
        List<GetHistoryDto> getHistory = histories.stream().filter(history -> history.getStarPoint()>0)
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

    @GetMapping("/{id}")
    public ResponseEntity<GetHistoryDetailDto> getHistoryDetail(@PathVariable Long id){
        Optional<History> history = historyService.getHistoryById(id);
//        System.out.println(history);
        GetHistoryDetailDto historyDetail = new GetHistoryDetailDto();
        historyDetail.historyId = id;
        historyDetail.wordResult = history.get().getWordResults().stream()
                .map(wordResult -> {
                    WordResultDto newDto = new WordResultDto();
                    newDto.audio_path = wordResult.getAudioPath();
                    newDto.is_correct = wordResult.getIsCorrect();
                    newDto.word_name = wordResult.getWord().getWordName();
                    newDto.image_path = wordResult.getWord().getImagePath();

                    return newDto;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(historyDetail);
    }

    @PostMapping("")
    public ResponseEntity<Long> createHistory(@RequestBody HistoryRequestDto historyRequestDto){

        Long history_id = historyService.createHistory(historyRequestDto);

        return ResponseEntity.ok().body(history_id);
    }

    @PostMapping("/{id}")
    public ResponseEntity setStarPoint(@PathVariable Long id, @RequestBody StarPointDto starPointDto){
        historyService.setStarPoint(id,starPointDto);
        return ResponseEntity.ok().body(HttpStatus.ACCEPTED);
    }

    @PostMapping("/wordresult/{word_id}")
    public ResponseEntity createWordResult(@PathVariable Long word_id, @RequestBody WordResultRequestDto wordResultRequestDto){
        historyService.createWordResult(word_id,wordResultRequestDto);
        return ResponseEntity.ok().body(HttpStatus.ACCEPTED);
    }

}
