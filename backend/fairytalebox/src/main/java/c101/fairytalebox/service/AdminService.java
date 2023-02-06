package c101.fairytalebox.service;

import c101.fairytalebox.dto.AdminMemberDto;
import c101.fairytalebox.dto.AdminStoryDto;
import c101.fairytalebox.dto.DeviceDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AdminService {

    public Long registerDevice(DeviceDto request);

    public void removeDevice(Long id);

    public List<AdminMemberDto> readMembers();

    // 회원탈퇴 메서드
    public void removeMember(Long id);

    public Long uploadStory(AdminStoryDto request);

    public AdminStoryDto readStory(Long id) throws Exception;

    public List<AdminStoryDto> readStories();

    public void removeStory(Long id);

    public AdminStoryDto updateStory (Long id, AdminStoryDto request) throws Exception;
}
