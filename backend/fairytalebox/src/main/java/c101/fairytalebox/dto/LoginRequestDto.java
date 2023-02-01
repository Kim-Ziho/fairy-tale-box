package c101.fairytalebox.dto;

import lombok.Data;

@Data
public class LoginRequestDto {
    private String email;
    private String password;
}
