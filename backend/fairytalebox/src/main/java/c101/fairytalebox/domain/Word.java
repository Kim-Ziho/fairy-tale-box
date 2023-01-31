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
    @JoinColumn(name = "story_id")
    private Story story;

    @OneToOne(mappedBy = "word", fetch = FetchType.LAZY)
    private WordResult wordResult;

    private String imagePath;
}
