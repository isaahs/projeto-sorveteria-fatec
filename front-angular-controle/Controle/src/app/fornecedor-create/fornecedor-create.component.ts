import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-fornecedor',
  templateUrl: './create-fornecedor.component.html',
  styleUrls: ['./create-fornecedor.component.css']
})
export class CreateFornecedorComponent implements OnInit {

  fornecedor:Fornecedor = new Fornecedor();
  constructor(private fornecedorService: FornecedorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveFornecedor(){
    this.fornecedorService.createFornecedor(this.fornecedor).subscribe(data =>{
      console.log(data);
      this.goToFornecedorList();
    },
    error => console.log(error));
  }

  goToFornecedorList(){
    this.router.navigate(['/fornecedores']);
  }
  
  onSubmit(){
    console.log(this.fornecedor);
    this.saveFornecedor();
  }
}