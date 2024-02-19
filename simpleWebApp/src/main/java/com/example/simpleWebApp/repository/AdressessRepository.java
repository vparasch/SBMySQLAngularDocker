package com.example.simpleWebApp.repository;

import com.example.simpleWebApp.entity.Adresses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdressessRepository extends JpaRepository<Adresses, Long> {
}
