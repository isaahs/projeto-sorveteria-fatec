package com.sorveteria.controle.sorvete.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Table(name = "sorvete")
public class Sorvete implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSorvete;
    private String sabor;
    private String tipo;
    private String dataValidade;

    public static Sorvete mapper(Object o) {
        var resultado = Sorvete.
    }

}
