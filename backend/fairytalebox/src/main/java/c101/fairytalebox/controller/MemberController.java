package c101.fairytalebox.controller;

import c101.fairytalebox.domain.Member;
import c101.fairytalebox.dto.*;
import c101.fairytalebox.jwt.JwtTokenProvider;
import c101.fairytalebox.jwt.TokenInfo;
import c101.fairytalebox.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/signup")
    public Long signUp(@Valid @RequestBody SignUpRequestDto request) throws Exception {
        return memberService.signUp(request);
    }
    @PostMapping("/login")
    public TokenInfo login(@RequestBody LoginRequestDto request) {
        return memberService.login(request);
    }

    @PostMapping("/authcheck")
    public TokenInfo authCheck(@RequestBody Map<String, String> serialNum) throws Exception{
        return memberService.authCheck(serialNum.get("serialNum"));
    }

    @PostMapping("/email/check")
    public Boolean checkEmail(@RequestBody EmailCheckDto request) throws Exception {
        return memberService.checkEmail(request);
    }

    @PostMapping("/nickname/check")
    public Boolean checkNickname(@RequestBody MemberNicknameDto request) throws Exception {
        return memberService.checkNickname(request);
    }

    @PutMapping("/nickname/change")
    public ResponseEntity<MemberNicknameDto> changeNickname(@RequestBody MemberNicknameDto request,
                                                            @AuthenticationPrincipal User user) throws Exception{
        MemberNicknameDto memberNicknameDto = memberService.changeNickname(request, user);
        return new ResponseEntity<>(memberNicknameDto, HttpStatus.OK);
    }

    @PutMapping("/password/change")
    public boolean changePassword(@RequestBody ChangePasswordDto request, @AuthenticationPrincipal User user) throws Exception{
        return memberService.changePassword(request, user);
    }



}
