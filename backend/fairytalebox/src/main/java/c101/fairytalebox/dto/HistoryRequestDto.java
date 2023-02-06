package c101.fairytalebox.dto;

import c101.fairytalebox.domain.History;
import c101.fairytalebox.domain.Member;
import c101.fairytalebox.domain.Story;
import c101.fairytalebox.domain.WordResult;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class HistoryRequestDto {
    private int starPoint;
    private LocalDateTime studyDate;
    private Long member_id;
    private Long story_id;


}
