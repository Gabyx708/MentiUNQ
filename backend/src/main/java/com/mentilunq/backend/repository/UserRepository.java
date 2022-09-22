package com.mentilunq.backend.repository;

import com.mentilunq.backend.modelo.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
}
