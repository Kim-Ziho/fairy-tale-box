package c101.fairytalebox.service;


import c101.fairytalebox.dto.SignUpRequestDto;

import java.util.Map;

public interface MemberService {
    public Long signUp(SignUpRequestDto requestDto) throws Exception;

//    public String login(Map<String, String> members);


}
