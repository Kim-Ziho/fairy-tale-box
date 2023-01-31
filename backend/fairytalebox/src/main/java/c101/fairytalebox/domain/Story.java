package c101.fairytalebox.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class Story {
    @Id@GeneratedValue
    @Column(name = "story_id")
    private Long id;

    private String title;

    private String overview;

    private String packagePath;

    @OneToMany(mappedBy = "story", cascade = CascadeType.ALL)
    private List<History> historyList = new ArrayList<>();

    @OneToMany(mappedBy = "story", cascade = CascadeType.ALL)
    private List<Word> words = new ArrayList<>();

}
