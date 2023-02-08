package c101.fairytalebox.repository;

import c101.fairytalebox.domain.Member;
import c101.fairytalebox.domain.MemberRaspberry;
import c101.fairytalebox.domain.RaspberrySerial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRaspberryRepository extends JpaRepository<MemberRaspberry, Long> {
    MemberRaspberry save(MemberRaspberry memberRaspberry);

    Optional<MemberRaspberry> findByRaspberrySerial(RaspberrySerial raspberrySerial);

    Optional<MemberRaspberry> findByMember(Member member);
}
