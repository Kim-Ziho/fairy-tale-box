package c101.fairytalebox.service;

import c101.fairytalebox.domain.Story;
import c101.fairytalebox.dto.UploadStoryDto;
import c101.fairytalebox.repository.StoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class AdminServiceImpl implements AdminService{

    private final StoryRepository storyRepository;
    @Override
    @Transactional
    public Long uploadStory(UploadStoryDto request) {
        Story story = storyRepository.save(request.toEntity());
        return story.getId();
    }

}
