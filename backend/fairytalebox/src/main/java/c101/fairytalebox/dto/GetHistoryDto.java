package c101.fairytalebox.dto;

import c101.fairytalebox.domain.Story;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetHistoryDto {
    public Long historyId;
    public int starPoint;
    public LocalDateTime studyDate;
    public String story;
}
