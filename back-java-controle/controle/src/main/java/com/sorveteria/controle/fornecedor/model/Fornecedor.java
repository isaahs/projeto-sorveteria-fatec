package com.sorveteria.controle.fornecedor.model;

import com.sorveteria.controle.fornecedor.dto.FornecedorAtualizacaoDTO;
import com.sorveteria.controle.fornecedor.dto.FornecedorRegistroDTO;
import jakarta.persistence.*;
import lombok.*;

/**
 * O uso de anotações do lombook, define codigos que serão executados
 * em ordem de execução
 */


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "fornecedor")
public class Fornecedor {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cnpj;
    private String nome;
    private Double valorUnitario;
    private String localizacao;
    private boolean ativo;

    public Fornecedor(FornecedorRegistroDTO fornecedorRegistroDTO) {
        this.ativo = true;
        this.cnpj = fornecedorRegistroDTO.cnpj();
        this.nome = fornecedorRegistroDTO.nome();
        this.valorUnitario = fornecedorRegistroDTO.valorMedioUnitario();
        this.localizacao = fornecedorRegistroDTO.localizacao();
    }

    public void atualizarInformacoes(FornecedorAtualizacaoDTO fornecedorAtualizacaoDTO) {
        if (fornecedorAtualizacaoDTO.cnpj() != null){
            this.cnpj = fornecedorAtualizacaoDTO.cnpj();
        }

        if (fornecedorAtualizacaoDTO.nome() != null){
            this.nome = fornecedorAtualizacaoDTO.nome();
        }

        if (fornecedorAtualizacaoDTO.valorUnitario() != null) {
            this.valorUnitario = fornecedorAtualizacaoDTO.valorUnitario();
        }

        if(fornecedorAtualizacaoDTO.localizacao() != null) {
            this.localizacao = fornecedorAtualizacaoDTO.localizacao();
        }
    }

    public void excluir() {
        this.ativo = false;
    }

}
