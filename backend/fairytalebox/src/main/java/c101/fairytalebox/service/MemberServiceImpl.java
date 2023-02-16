package c101.fairytalebox.service;

import antlr.Token;
import c101.fairytalebox.domain.Member;
import c101.fairytalebox.domain.MemberRaspberry;
import c101.fairytalebox.domain.RaspberrySerial;
import c101.fairytalebox.domain.Role;
import c101.fairytalebox.dto.*;
import c101.fairytalebox.jwt.JwtTokenProvider;
import c101.fairytalebox.jwt.TokenInfo;
import c101.fairytalebox.repository.MemberRaspberryRepository;
import c101.fairytalebox.repository.MemberRepository;
import c101.fairytalebox.repository.RaspberrySerialRepository;
import c101.fairytalebox.utils.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final RaspberrySerialRepository raspberrySerialRepository;
    private final MemberRaspberryRepository memberRaspberryRepository;

    @Transactional
    @Override
    public Long signUp(SignUpRequestDto request) throws Exception {

        if (memberRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new Exception("이메일 중복 검사를 진행해주세요");
        }

        if (memberRepository.findByNickname(request.getNickname()).isPresent()) {
            throw new Exception("닉네임 중복 검사를 진행해주세요");
        }

        if (!request.getPassword().equals(request.getCheckedPassword())) {
            throw new Exception("비밀번호가 일치하지 않습니다.");
        }

        if (!request.getEmail().equals("admin@naver.com")) {
            RaspberrySerial raspberrySerial = raspberrySerialRepository.findBySerialNum(request.getSerialNum())
                    .orElseThrow(() -> new IllegalArgumentException("기기 정보가 올바르지 않습니다."));
            MemberRaspberry memberRaspberry = memberRaspberryRepository.findByRaspberrySerial(raspberrySerial)
                    .orElse(null);
            if (memberRaspberry != null) {
                throw new Exception("이미 등록된 기기입니다.");
            }
        }


        try {
            Member member = memberRepository.save(request.toEntity());

            member.encodePassword(passwordEncoder);

            return member.getId();
        } catch (Exception e) {
            throw new Exception("회원가입 오류");
            
        }

    }

    @Override
    @Transactional
    public TokenInfo login(LoginRequestDto request) {
        System.out.println(SecurityUtil.getLoginUsername());
        String email = request.getEmail();
        String password = request.getPassword();

        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 Email 입니다."));

        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }

        RaspberrySerial raspberrySerial = raspberrySerialRepository.findBySerialNum(member.getSerialNum())
                .orElse(null);



        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);

        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        MemberRaspberry memberRaspberry = memberRaspberryRepository.findByMember(member)
                .orElse(MemberRaspberry.builder()
                        .member(member)
                        .raspberrySerial(raspberrySerial)
                        .build());

        if (!member.getRole().equals(Role.ROLE_ADMIN)) {
        memberRaspberry.updateToken(tokenInfo.getAccessToken(), tokenInfo.getRefreshToken());}


        memberRaspberryRepository.save(memberRaspberry);


        return tokenInfo;
    }

    @Override
    @Transactional
    public TokenInfo authCheck(String serialNum) {
        RaspberrySerial raspberrySerial = raspberrySerialRepository.findBySerialNum(serialNum)
                .orElseThrow(()->new IllegalArgumentException("시리얼 넘버를 통해 라즈베리 찾는 것을 실패하였다."));

        MemberRaspberry memberRaspberry = memberRaspberryRepository.findByRaspberrySerial(raspberrySerial)
                .orElseThrow(() -> new IllegalArgumentException("시리얼 넘버를 통해 찾은 라즈베리에 로그인 하지 않았다."));

        // 로컬에서 날아온 시리얼과 일치하는 것을 db에서 찾은 후 그것을 통해 일시 저장 되어 있던 토큰 정보를 담고
        TokenInfo tokenInfo = TokenInfo.builder()
                .grantType("Bearer")
                .accessToken(memberRaspberry.getAccessToken())
                .refreshToken((memberRaspberry.getRefreshToken()))
                .build();

        // 저장된 토큰은 삭제한다.
        memberRaspberry.clearToken();

        return tokenInfo;
    }

    @Override
    public Boolean checkEmail(EmailCheckDto request) throws Exception {
        if (memberRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new Exception("이미 존재하는 이메일입니다.");
        }
        return false;
    }

    @Override
    public Boolean checkNickname(MemberNicknameDto request) throws Exception {
        if (memberRepository.findByNickname(request.getNickname()).isPresent()) {
            throw new Exception("이미 존재하는 닉네임입니다.");
        }
        return false;
    }

    @Transactional
    @Override
    public MemberNicknameDto changeNickname (MemberNicknameDto request, User user) throws Exception{
        Member member = memberRepository.findById(Long.valueOf(user.getUsername())).orElse(null);
        member.modifyNick(request.getNickname());
        MemberNicknameDto memberNicknameDto = MemberNicknameDto.builder()
                .nickname(member.getNickname())
                .build();
        return memberNicknameDto;
    }

    @Transactional
    @Override
    public Boolean changePassword (ChangePasswordDto request, User user) throws Exception {
        Member member = memberRepository.findById(Long.valueOf(user.getUsername())).orElse(null);

        if (!passwordEncoder.matches(request.getCurrentPassword(), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }

        if (!request.getNewPassword().equals(request.getCheckedNewPassword())) {
            throw new Exception("비밀번호가 일치하지 않습니다.");
        }

        member.modifyPassword(request.getNewPassword());
        member.encodePassword(passwordEncoder);

        return true;
    }

}

