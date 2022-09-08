package com.mentilunq.backend.repository;

import com.mentilunq.backend.modelo.Presentation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface PresentationRepository extends JpaRepository<Presentation,Long> {
}
