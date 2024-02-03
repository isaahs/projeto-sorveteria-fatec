package com.sorveteria.controle.controller;

import com.sorveteria.controle.fornecedor.repository.FornecedorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.web.PageableDefault;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor // permite o não uso autowired
@RequestMapping("/api/v1/")
public class FornecedorController {

    // alterar de medico para forn.

    private final FornecedorRepository repository;

    @PostMapping
    @Transactional // Transactional é necessário para o Spring gerenciar a transação com o banco de dados
    public void cadastrar(@RequestBody @Valid F medicoRegistroDTO) {

        repository.save(new Medico(medicoRegistroDTO));
    }

    @GetMapping
    public Page<MedicoListagemDTO> listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable pageable) {
        // return repository.findAll(pageable).map(MedicoListagemDTO::new);
        return repository.findAllByAtivoTrue(pageable).map(MedicoListagemDTO::new);
    }

    @PutMapping
    @Transactional
    public void atualizar(@RequestBody @Valid MedicoAtualizacaoDTO medicoAtualizacaoDTO) {
        var medico = repository.getReferenceById(medicoAtualizacaoDTO.id());
        medico.atualizarInformacoes(medicoAtualizacaoDTO);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id) {
        // repository.deleteById(id);
        var medico = repository.getReferenceById(id);
        medico.excluir();
    }



}
