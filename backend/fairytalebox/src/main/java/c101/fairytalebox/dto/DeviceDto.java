package c101.fairytalebox.dto;

import c101.fairytalebox.domain.RaspberrySerial;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor
public class DeviceDto {

    private String serialNum;

    public RaspberrySerial toEntity() {
        return RaspberrySerial.builder()
                .serialNum(serialNum)
                .build();
    }
}
