package com.example.simpleWebApp.service;

import com.example.simpleWebApp.entity.Adresses;
import com.example.simpleWebApp.repository.AdressessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdressessService {
    private final AdressessRepository adressessRepository;

    @Autowired
    public AdressessService(AdressessRepository adressessRepository){
        this.adressessRepository = adressessRepository;
    }

    public void saveAdressess(Adresses adressess){
        adressessRepository.save(adressess);
    }

    public List<Adresses> getAllAdressess(){
        return adressessRepository.findAll();
    }

    public void deleteAdressess(long id){
        adressessRepository.deleteById(id);
    }
}
