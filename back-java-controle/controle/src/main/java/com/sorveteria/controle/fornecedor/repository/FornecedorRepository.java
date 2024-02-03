package com.sorveteria.controle.fornecedor.repository;

import com.sorveteria.controle.fornecedor.model.Fornecedor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Long> {
    Page<Fornecedor> findAllAtivoTrue(Pageable pageable);
}
