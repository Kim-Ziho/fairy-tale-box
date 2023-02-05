package c101.fairytalebox.repository;

import c101.fairytalebox.domain.RaspberrySerial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RaspberrySerialRepository  extends JpaRepository<RaspberrySerial, Long> {
    RaspberrySerial save(RaspberrySerial raspberrySerial);
}
