package c101.fairytalebox.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberNicknameDto {

    private String email;

    private String nickname;

}
