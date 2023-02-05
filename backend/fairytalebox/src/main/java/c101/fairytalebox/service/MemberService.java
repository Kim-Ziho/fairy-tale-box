package c101.fairytalebox.service;


import c101.fairytalebox.dto.EmailCheckDto;
import c101.fairytalebox.dto.LoginRequestDto;
import c101.fairytalebox.dto.MemberNicknameDto;
import c101.fairytalebox.dto.SignUpRequestDto;
import c101.fairytalebox.jwt.TokenInfo;

public interface MemberService {

    public Long signUp(SignUpRequestDto request) throws Exception;

    public TokenInfo login(LoginRequestDto request);

    public Boolean checkEmail (EmailCheckDto request) throws Exception;

    public Boolean checkNickname (MemberNicknameDto request) throws Exception;

    public MemberNicknameDto modifyNickname (MemberNicknameDto request) throws Exception;

}
