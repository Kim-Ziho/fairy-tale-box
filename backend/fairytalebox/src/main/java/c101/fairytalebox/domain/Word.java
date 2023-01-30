package c101.fairytalebox.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class Word {
    @Id@GeneratedValue
    @Column(name = "word_id")
    private Long id;

    private String wordName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "history_id")
    private MemberHistory memberHistory;

    private String audioPath;

    private String wordImage;
}
