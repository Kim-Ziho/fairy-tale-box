package c101.fairytalebox.service;

import c101.fairytalebox.domain.Member;
import c101.fairytalebox.dto.EmailCheckDto;
import c101.fairytalebox.dto.LoginRequestDto;
import c101.fairytalebox.dto.MemberNicknameDto;
import c101.fairytalebox.dto.SignUpRequestDto;
import c101.fairytalebox.jwt.JwtTokenProvider;
import c101.fairytalebox.jwt.TokenInfo;
import c101.fairytalebox.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
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

    @Transactional
    @Override
    public Long signUp(SignUpRequestDto request) throws Exception {

        if (memberRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new Exception("이미 존재하는 이메일입니다.");
        }

        if (!request.getPassword().equals(request.getCheckedPassword())) {
            throw new Exception("비밀번호가 일치하지 않습니다.");
        }

        Member member = memberRepository.save(request.toEntity());
        member.encodePassword(passwordEncoder);

        return member.getId();
    }

    @Override
    public TokenInfo login(LoginRequestDto request) {

        String email = request.getEmail();
        String password = request.getPassword();

        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 Email 입니다."));

        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }


        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);

        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

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
    public MemberNicknameDto modifyNickname (MemberNicknameDto request) throws Exception{
        Member findMember = memberRepository.findByEmail(request.getEmail()).orElseThrow(() -> new Exception("해당 유저를 찾을 수 없습니다."));

        findMember.modifyNick(request.getNickname());

        MemberNicknameDto memberNicknameDto = MemberNicknameDto.builder()
                .email((findMember.getEmail()))
                .nickname(findMember.getNickname())
                .build();

        return memberNicknameDto;




    }


}

