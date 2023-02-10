package c101.fairytalebox.domain;

import c101.fairytalebox.jwt.TokenInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberRaspberry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "memberRaspberry_id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "raspberry_id")
    private RaspberrySerial raspberrySerial;

    private String accessToken;

    private String refreshToken;


    public void updateToken (String accessToken, String refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
    public void clearToken () {
        this.accessToken = null;
        this.refreshToken = null;
    }

}
