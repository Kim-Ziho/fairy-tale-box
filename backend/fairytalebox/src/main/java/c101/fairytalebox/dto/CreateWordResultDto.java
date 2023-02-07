package c101.fairytalebox.dto;

import c101.fairytalebox.domain.History;
import c101.fairytalebox.domain.Word;
import c101.fairytalebox.domain.WordResult;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateWordResultDto {
    private History history;
    private Word word;
    private String audioPath;
    private Boolean isCorrect;

    public WordResult toEntity(){
        return WordResult.builder()
                .history(history)
                .word(word)
                .audioPath(audioPath)
                .isCorrect(isCorrect)
                .build();
    }

}
