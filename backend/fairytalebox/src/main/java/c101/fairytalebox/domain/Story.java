package c101.fairytalebox.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "story_id")
    private Long id;

    private String title;

    private String overview;

    private String packagePath;

    @OneToMany(mappedBy = "story", cascade = CascadeType.ALL)
    private List<History> historyList = new ArrayList<>();

    @OneToMany(mappedBy = "story", cascade = CascadeType.ALL)
    private List<Word> words = new ArrayList<>();

    public void modify(String title, String packagePath, String overview) {
        this.title = title;
        this.packagePath = packagePath;
        this.overview = overview;
    }
}
