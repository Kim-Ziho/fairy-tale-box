package c101.fairytalebox.controller;


import c101.fairytalebox.domain.History;
import c101.fairytalebox.dto.AdminStoryDto;
import c101.fairytalebox.dto.GetHistoryDto;
import c101.fairytalebox.service.HistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class HistoryController {
    private final HistoryService historyService;

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

//    @GetMapping("/history/{id}")
//    public ResponseEntity<GetHistoryDto> getHistoryDetail(){
//        History history = historyService.get
//        return ResponseEntity.ok().body(getHistoryDetail);
//    }

}
