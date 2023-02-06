package c101.fairytalebox.dto;

import c101.fairytalebox.domain.RaspberrySerial;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DeviceDto {

    private String serialNum;

    public RaspberrySerial toEntity() {
        return RaspberrySerial.builder()
                .serialNum(serialNum)
                .build();
    }
}
