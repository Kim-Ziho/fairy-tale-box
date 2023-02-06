package c101.fairytalebox.dto;

import c101.fairytalebox.domain.History;
import c101.fairytalebox.domain.Member;
import c101.fairytalebox.domain.Story;

import java.time.LocalDateTime;

public class CreateHistoryDto {
    public Member member;
    public Story story;
    public int starPoint;
    public LocalDateTime studyDate;

    public History toEntity(){
        return History.builder()
                .member(member)
                .story(story)
                .starPoint(starPoint)
                .studyDate(studyDate)
                .build();
    }

}
