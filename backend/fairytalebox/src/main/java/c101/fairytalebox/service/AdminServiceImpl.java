package c101.fairytalebox.service;

import c101.fairytalebox.domain.RaspberrySerial;
import c101.fairytalebox.domain.Story;
import c101.fairytalebox.dto.AdminMemberDto;
import c101.fairytalebox.dto.AdminStoryDto;
import c101.fairytalebox.dto.DeviceDto;
import c101.fairytalebox.repository.MemberRepository;
import c101.fairytalebox.repository.RaspberrySerialRepository;
import c101.fairytalebox.repository.StoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class AdminServiceImpl implements AdminService {

    private final StoryRepository storyRepository;
    private final MemberRepository memberRepository;
    private final RaspberrySerialRepository raspberrySerialRepository;


    @Override
    @Transactional
    public Long registerDevice(DeviceDto request) {
        RaspberrySerial raspberrySerial = raspberrySerialRepository.save(request.toEntity());
        return raspberrySerial.getId();
    }

    @Override
    @Transactional
    public void removeDevice(Long id) {
        raspberrySerialRepository.deleteById(id);
    }


    @Override
    public List<AdminMemberDto> readMembers() {
        return memberRepository.findAll().stream().map(x ->
                        AdminMemberDto.builder()
                                .email(x.getEmail())
                                .nickname(x.getNickname())
                                .createdDate(x.getCreatedDate())
                                .role(x.getRole()).build())
                .collect(Collectors.toList());

    }

    @Override
    @Transactional
    public void removeMember(Long id) {
        memberRepository.deleteById(id);
    }


    @Override
    @Transactional
    public Long uploadStory(AdminStoryDto request) {
        Story story = storyRepository.save(request.toEntity());
        return story.getId();
    }


    @Override
    public AdminStoryDto readStory(Long id) throws Exception{
        Story findStory = storyRepository.findById(id).orElseThrow(() -> new Exception("해당 동화를 찾을 수 없습니다."));
        AdminStoryDto adminStoryDto = AdminStoryDto.builder()
                .title(findStory.getTitle())
                .overview(findStory.getOverview())
                .packagePath(findStory.getPackagePath())
                .build();
        return adminStoryDto;
    }

    @Override
    public List<AdminStoryDto> readStories() {
        return storyRepository.findAll().stream().map(x ->
                AdminStoryDto.builder()
                        .title(x.getTitle())
                        .packagePath(x.getPackagePath())
                        .overview(x.getOverview()).build())
                .collect(Collectors.toList());
    }
    @Transactional
    @Override
    public void removeStory(Long id) {
        storyRepository.deleteById(id);
    }

    @Transactional
    @Override
    public AdminStoryDto updateStory(Long id, AdminStoryDto request) throws Exception {
        Story findStory = storyRepository.findById(id).orElseThrow(() -> new Exception("해당 동화를 찾을 수 없습니다."));

        findStory.modify(request.getTitle(), request.getPackagePath(), request.getOverview());


        AdminStoryDto adminStoryDto = AdminStoryDto.builder()
                .title(findStory.getTitle())
                .overview(findStory.getOverview())
                .packagePath(findStory.getPackagePath())
                .build();

        return adminStoryDto;
    }

}
