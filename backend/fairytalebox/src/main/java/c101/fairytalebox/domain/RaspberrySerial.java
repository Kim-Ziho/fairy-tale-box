package c101.fairytalebox.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RaspberrySerial {
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "raspberry_id")
    private Long id;

    private String serialNum;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    private Member member;

    public void registerMember(Member member) {
        this.member = member;
    }
}
