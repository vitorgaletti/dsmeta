package com.vitor.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vitor.backend.entities.Sale;
import com.vitor.backend.repositories.SaleRepository;

@Service
public class SaleServices {

  @Autowired
  private SaleRepository repository;

  public List<Sale> findSales() {
    return repository.findAll();
  }
}