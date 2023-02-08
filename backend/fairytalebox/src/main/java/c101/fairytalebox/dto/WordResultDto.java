package c101.fairytalebox.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WordResultDto {
    public String audio_path;
    public Boolean is_correct;
    public String word_name;
    public String image_path;

}
