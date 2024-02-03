package com.sorveteria.controle.fornecedor.dto;

public record FornecedorRegistroDTO(

        /*
         * Não foi adicionado validações como:
         *
         * - @NotBlank que define que o atributo deve ser obrigatório e não nulo, usado para strings
         * - @NotNull que define que o atributo não pode ser nulo
         * - @Pattern que define atraves de Regex um padrão
         * - etc ...
         *
         */

        String cnpj,
        String nome,
        Double valorMedioUnitario,
        String localizacao
) {
}
