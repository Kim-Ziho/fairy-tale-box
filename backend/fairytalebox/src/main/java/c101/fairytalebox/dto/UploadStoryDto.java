package c101.fairytalebox.dto;

import c101.fairytalebox.domain.Story;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UploadStoryDto {
    private String title;
    private String overview;
    private String packagePath;

    @Builder
    public Story toEntity() {
        return Story.builder()
                .title(title)
                .overview(overview)
                .packagePath(packagePath)
                .build();
    }
}
