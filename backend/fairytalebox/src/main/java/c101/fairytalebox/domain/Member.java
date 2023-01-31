package c101.fairytalebox.domain;

import lombok.Getter;
import lombok.NonNull;

import javax.persistence.Column;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Member {

    @Id@GeneratedValue
    @Column(name = "member_id")
    private Long id;
    @NonNull
    private String email;

    @NonNull
    private String password;

    @NonNull
    private String nickname;

    @OneToOne(mappedBy = "member", fetch = FetchType.LAZY)
    private RaspberrySerial raspberrySerial;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<History> historyList = new ArrayList<>();

}
