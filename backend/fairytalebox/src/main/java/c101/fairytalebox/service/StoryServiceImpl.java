package c101.fairytalebox.service;

import c101.fairytalebox.domain.Story;
import c101.fairytalebox.dto.GetStoryDto;
import c101.fairytalebox.repository.StoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class StoryServiceImpl implements StoryService{
    private final StoryRepository storyRepository;

    public List<GetStoryDto> getStory(){
        List<Story> stories = storyRepository.findAll();
        List<GetStoryDto> getStory = stories.stream().map(story ->{
            GetStoryDto newDto = new GetStoryDto();
            newDto.setStory_id(story.getId());
            newDto.setStory_overview(story.getOverview());
            newDto.setStory_title(storyRepository.findById(story.getId()).get().getTitle());
            return newDto;
        }).collect(Collectors.toList());

        return getStory;

    }

    public GetStoryDto getStorybyID(Long id){
        Story story = storyRepository.findById(id).orElse(null);
        GetStoryDto getStorybyId = new GetStoryDto();
        getStorybyId.setStory_id(story.getId());
        getStorybyId.setStory_overview(story.getOverview());
        getStorybyId.setStory_title(storyRepository.findById(story.getId()).get().getTitle());
        return getStorybyId;
    }
}
