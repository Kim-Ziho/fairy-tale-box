package c101.fairytalebox.dto;

import c101.fairytalebox.domain.Role;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class AdminMemberDto {
    private String email;
    private String nickname;
    private Role role;
    private LocalDateTime createdDate;

    @Builder
    public AdminMemberDto(String email, String nickname, Role role, LocalDateTime createdDate) {
        this.email = email;
        this.nickname = nickname;
        this.role = role;
        this.createdDate = createdDate;
    }

}
