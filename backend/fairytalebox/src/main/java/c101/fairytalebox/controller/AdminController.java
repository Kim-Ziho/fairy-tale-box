package c101.fairytalebox.controller;

import c101.fairytalebox.dto.SignUpRequestDto;
import c101.fairytalebox.dto.UploadStoryDto;
import c101.fairytalebox.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @PostMapping("/story")
    public Long uploadStory(@Valid @RequestBody UploadStoryDto request) throws Exception {
        return adminService.uploadStory(request);
    }
}
