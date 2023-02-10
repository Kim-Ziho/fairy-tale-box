package c101.fairytalebox.controller;

import c101.fairytalebox.dto.GetStoryDto;
import c101.fairytalebox.repository.StoryRepository;
import c101.fairytalebox.service.StoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}")
    public ResponseEntity<GetStoryDto> getStorybyID(@PathVariable Long id){

        return ResponseEntity.ok().body(storyService.getStorybyID(id));

    }
}
