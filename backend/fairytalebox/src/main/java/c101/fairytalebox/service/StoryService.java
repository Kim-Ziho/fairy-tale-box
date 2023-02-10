package c101.fairytalebox.service;

import c101.fairytalebox.dto.GetStoryDto;

import java.util.List;

public interface StoryService {
    public List<GetStoryDto> getStory();

    public GetStoryDto getStorybyID(Long id);
}
