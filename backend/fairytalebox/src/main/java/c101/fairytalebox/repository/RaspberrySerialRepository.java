package c101.fairytalebox.repository;

import c101.fairytalebox.domain.Member;
import c101.fairytalebox.domain.RaspberrySerial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RaspberrySerialRepository  extends JpaRepository<RaspberrySerial, Long> {
    RaspberrySerial save(RaspberrySerial raspberrySerial);

    Optional<RaspberrySerial> findBySerialNum(String serialNum);
}
