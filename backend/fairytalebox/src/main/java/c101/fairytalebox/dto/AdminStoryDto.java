package c101.fairytalebox.dto;

import c101.fairytalebox.domain.Story;
import lombok.Builder;
import lombok.Getter;

@Getter
public class AdminStoryDto {
    private String title;
    private String overview;
    private String packagePath;

    @Builder
    public AdminStoryDto(String title, String overview, String packagePath) {
        this.title = title;
        this.overview = overview;
        this.packagePath = packagePath;
    }



    public Story toEntity() {
        return Story.builder()
                .title(title)
                .overview(overview)
                .packagePath(packagePath)
                .build();
    }
}
