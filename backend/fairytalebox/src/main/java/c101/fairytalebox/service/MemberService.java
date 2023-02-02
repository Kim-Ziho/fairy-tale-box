package c101.fairytalebox.service;


import c101.fairytalebox.dto.LoginRequestDto;
import c101.fairytalebox.dto.SignUpRequestDto;
import c101.fairytalebox.jwt.TokenInfo;

import java.util.Map;

public interface MemberService {
    public Long signUp(SignUpRequestDto request) throws Exception;

    public TokenInfo login(LoginRequestDto request);

}
