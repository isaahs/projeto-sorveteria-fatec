package com.sorveteria.controle.fornecedor.dto;


import org.antlr.v4.runtime.misc.NotNull;

public record FornecedorAtualizacaoDTO(
        @NotNull Long id,
        String cnpj,
        String nome,
        Double valorUnitario,
        String localizacao
) {

}
