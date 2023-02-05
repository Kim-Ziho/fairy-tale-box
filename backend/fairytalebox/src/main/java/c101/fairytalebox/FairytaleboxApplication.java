package c101.fairytalebox;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class FairytaleboxApplication {

	public static void main(String[] args) {
		SpringApplication.run(FairytaleboxApplication.class, args);
	}

}
