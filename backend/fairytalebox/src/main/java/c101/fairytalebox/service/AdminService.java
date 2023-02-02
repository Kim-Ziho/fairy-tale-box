package c101.fairytalebox.service;

import c101.fairytalebox.dto.UploadStoryDto;

public interface AdminService {
    public Long uploadStory(UploadStoryDto request);
}
