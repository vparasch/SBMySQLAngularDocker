package com.example.simpleWebApp.entity;

import com.example.simpleWebApp.enums.Gender;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    @Column(nullable = false)
    private Gender gender;

    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(nullable = false)
    private LocalDate birthdate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "addresses_id")
    private Adresses addresses;

}
