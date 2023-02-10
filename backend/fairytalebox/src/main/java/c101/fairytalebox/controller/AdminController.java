package c101.fairytalebox.controller;

import c101.fairytalebox.domain.Story;
import c101.fairytalebox.dto.AdminMemberDto;
import c101.fairytalebox.dto.AdminStoryDto;
import c101.fairytalebox.dto.DeviceDto;
import c101.fairytalebox.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @PostMapping("/device")
    public Long registerDevice(@Valid @RequestBody DeviceDto request) throws  Exception{
        return adminService.registerDevice(request);
    }

    @DeleteMapping("/device/{raspberry_id}")
    public ResponseEntity reniveDevice (@PathVariable Long raspberry_id) {
        adminService.removeDevice(raspberry_id);
        return ResponseEntity.ok().build();
    }


    @GetMapping("/members")
    public ResponseEntity<List<AdminMemberDto>> readMembers() {
        return ResponseEntity.ok().body(adminService.readMembers());
    }

    @DeleteMapping("/member/{memberId}")
    public ResponseEntity removeMember (@PathVariable Long memberId) {
        adminService.removeMember(memberId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/stories")
    public ResponseEntity<List<AdminStoryDto>> readStories() {
        return ResponseEntity.ok().body(adminService.readStories());
    }

    @GetMapping("/story/{storyId}")
    public ResponseEntity<AdminStoryDto> readStory(@PathVariable Long storyId) throws Exception {
        return ResponseEntity.ok().body(adminService.readStory(storyId));
    }

    @PostMapping("/story")
    public Long uploadStory(@Valid @RequestBody AdminStoryDto request) throws Exception {
        return adminService.uploadStory(request);
    }

    @PutMapping("/story/{storyId}")
    public ResponseEntity<AdminStoryDto> updateStory(@PathVariable Long storyId, @RequestBody AdminStoryDto request) throws Exception {
        AdminStoryDto adminStoryDto = adminService.updateStory(storyId, request);
        return new ResponseEntity<>(adminStoryDto, HttpStatus.OK);
    }

    @DeleteMapping("/story/{storyId}")
    public ResponseEntity removeStory (@PathVariable Long storyId) {
        adminService.removeStory(storyId);
        return ResponseEntity.ok().build();
    }
}
