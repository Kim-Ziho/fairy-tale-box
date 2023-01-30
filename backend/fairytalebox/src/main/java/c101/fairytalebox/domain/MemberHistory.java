package c101.fairytalebox.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class MemberHistory {

    @Id@GeneratedValue
    @Column(name = "history_id")
    private Long id;

    private int starPoint;

    @OneToMany(mappedBy = "memberHistory", cascade = CascadeType.ALL)
    private List<Word> words = new ArrayList<>();
}
