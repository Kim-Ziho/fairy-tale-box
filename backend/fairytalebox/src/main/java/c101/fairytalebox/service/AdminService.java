package c101.fairytalebox.service;

import c101.fairytalebox.dto.AdminStoryDto;

import java.util.List;

public interface AdminService {
    public Long uploadStory(AdminStoryDto request);

    public AdminStoryDto readStory(Long id) throws Exception;

    public List<AdminStoryDto> readStories();

    public void removeStory(Long id);

    public AdminStoryDto updateStory (Long id, AdminStoryDto request) throws Exception;
}
