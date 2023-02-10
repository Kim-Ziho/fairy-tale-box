package c101.fairytalebox.service;


import c101.fairytalebox.domain.Member;
import c101.fairytalebox.dto.*;
import c101.fairytalebox.jwt.TokenInfo;
import org.springframework.security.core.userdetails.User;

public interface MemberService {

    public Long signUp(SignUpRequestDto request) throws Exception;

    public TokenInfo login(LoginRequestDto request);

    public Boolean checkEmail (EmailCheckDto request) throws Exception;

    public Boolean checkNickname (MemberNicknameDto request) throws Exception;

    public MemberNicknameDto changeNickname (MemberNicknameDto request, User user) throws Exception;

    public Boolean changePassword (ChangePasswordDto request, User user) throws Exception;

    public TokenInfo authCheck (String serialNum) throws Exception;

}
