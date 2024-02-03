package com.sorveteria.controle.sorvete.repository;

import com.sorveteria.controle.sorvete.model.Sorvete;
import org.hibernate.query.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SorveteRepository extends JpaRepository<Sorvete, Long> {
    Page<F>
}
