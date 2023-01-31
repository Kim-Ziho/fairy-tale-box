package c101.fairytalebox.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class WordResult {
    @Id
    @GeneratedValue
    @Column(name = "word_result_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "history_id")
    private History history;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "word_id")
    private Word word;

    private String audioPath;

    private Boolean isCorrect;
}
