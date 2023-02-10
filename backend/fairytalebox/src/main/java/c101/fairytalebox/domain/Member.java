package c101.fairytalebox.domain;

import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Member extends BaseTimeEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @NonNull
    @Column(unique = true)
    private String email;

    @NonNull
    private String password;

    @NonNull
    private String nickname;

    @NonNull
    private String serialNum;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<History> historyList = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Role role;
    public void encodePassword(PasswordEncoder passwordEncoder){
        this.password = passwordEncoder.encode(password);
    }

    public void modifyNick(String nickname) {
        this.nickname = nickname;
    }

    public void modifyPassword(String password) {
        this.password = password;
    }

}
