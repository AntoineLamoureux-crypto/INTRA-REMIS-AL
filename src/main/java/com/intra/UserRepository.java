package com.intra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Component
@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
