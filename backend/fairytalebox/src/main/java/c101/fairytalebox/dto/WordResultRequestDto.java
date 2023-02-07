package c101.fairytalebox.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WordResultRequestDto {
    private Long historyId;
    private Long wordId;
    private String audioPath;
    private Boolean isCorrect;
}
