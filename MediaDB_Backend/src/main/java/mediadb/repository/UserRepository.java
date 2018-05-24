package mediadb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mediadb.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findOneByName(String name);

}
