package com.sorveteria.controle.fornecedor.dto;

import com.sorveteria.controle.fornecedor.model.Fornecedor;

public record FornecedorListagemDTO(
        Long id,
        String cnpj,
        String nome,
        Double valorMedioUnitario,
        String localizacao
) {
    public FornecedorListagemDTO(Fornecedor fornecedor) {
        this(fornecedor.getId(), fornecedor.getNome(), fornecedor.getCnpj(), fornecedor.getValorUnitario(), fornecedor.getLocalizacao());
    }
}
