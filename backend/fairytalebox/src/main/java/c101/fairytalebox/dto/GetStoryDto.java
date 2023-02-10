package c101.fairytalebox.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetStoryDto {
    private Long story_id;
    private String story_title;
    private String story_overview;
}
