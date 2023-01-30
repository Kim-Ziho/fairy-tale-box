package c101.fairytalebox.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class RaspberrySerial {
    @Id@GeneratedValue
    @Column(name = "raspberry_id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    private Member member;
}
