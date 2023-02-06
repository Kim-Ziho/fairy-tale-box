package c101.fairytalebox.dto;


import c101.fairytalebox.dto.WordResultDto;
import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetHistoryDetailDto {
    public Long historyId;
    public List<WordResultDto> wordResult;
}


