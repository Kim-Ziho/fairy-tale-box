package c101.fairytalebox.dto;

import c101.fairytalebox.domain.Member;
import c101.fairytalebox.domain.RaspberrySerial;
import c101.fairytalebox.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class SignUpRequestDto {

    @NotBlank(message = "아이디를 입력해주세요")
    private String email;

    @NotBlank(message = "닉네임을 입력해주세요.")
    @Size(max = 8, message = "닉네임은 8자 이하 입니다.")
    private String nickname;


    @NotBlank(message = "비밀번호를 입력해주세요")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,30}$",
            message = "비밀번호는 8~30 자리이면서 1개 이상의 알파벳, 숫자, 특수문자를 포함해야합니다.")
    private String password;

    private String checkedPassword;

    private Role role;

    private String serialNum;

    public Member toEntity() {
        if (email.equals("admin@naver.com")) {
            return Member.builder()
                    .email(email)
                    .nickname(nickname)
                    .password(password)
                    .serialNum(serialNum)
                    .role(Role.ROLE_ADMIN)
                    .build();
        }
        else {
            return Member.builder()
                    .email(email)
                    .nickname(nickname)
                    .password(password)
                    .serialNum(serialNum)
                    .role(Role.ROLE_USER)
                    .build();
        }

    }
}
