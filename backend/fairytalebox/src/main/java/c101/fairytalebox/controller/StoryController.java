package c101.fairytalebox.controller;

import c101.fairytalebox.dto.GetStoryDto;
import c101.fairytalebox.repository.StoryRepository;
import c101.fairytalebox.service.StoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/api/story")
@RequiredArgsConstructor
public class StoryController {

    private final StoryService storyService;

    @GetMapping("")
    public ResponseEntity<List<GetStoryDto>> getStory(){
        return ResponseEntity.ok().body(storyService.getStory());

    }
}
