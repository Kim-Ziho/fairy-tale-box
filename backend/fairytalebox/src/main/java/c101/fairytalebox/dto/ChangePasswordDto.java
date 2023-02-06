package c101.fairytalebox.dto;

import lombok.Getter;

@Getter
public class ChangePasswordDto {
    private String currentPassword;
    private String newPassword;
    private String checkedNewPassword;
}
