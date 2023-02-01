package c101.fairytalebox.service;

import c101.fairytalebox.domain.Member;
import c101.fairytalebox.dto.SignUpRequestDto;
import c101.fairytalebox.jwt.JwtTokenProvider;
import c101.fairytalebox.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    @Override
    public Long signUp(SignUpRequestDto requestDto) throws Exception {

        if (memberRepository.findByEmail(requestDto.getEmail()).isPresent()) {
            throw new Exception("이미 존재하는 이메일입니다.");
        }

        if (!requestDto.getPassword().equals(requestDto.getCheckedPassword())) {
            throw new Exception("비밀번호가 일치하지 않습니다.");
        }

        Member member = memberRepository.save(requestDto.toEntity());
        member.encodePassword(passwordEncoder);

        return member.getId();
    }

//    @Override
//    public String login(Map<String, String> members) {
//
//        Member member = memberRepository.findByEmail(members.get("email"))
//                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 Email 입니다."));
//
//        String password = members.get("password");
//        if (!member.check(passwordEncoder, password)) {
//            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
//        }
//
//        List<String> roles = new ArrayList<>();
//        roles.add(member.getRole().name());
//
//        return JwtTokenProvider.createToken(member.getUsername(), roles);
//    }
}

