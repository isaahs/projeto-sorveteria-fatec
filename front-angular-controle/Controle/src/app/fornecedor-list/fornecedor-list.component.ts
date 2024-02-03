import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor'
import { FornecedorService } from '../fornecedor.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedoresListComponent implements OnInit {

  fornecedores: Fornecedor[];

  constructor(private fornecedorService: FornecedorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFornecedores();
  }

   private getFornecedores(){
    this.fornecedorService.getFornecedoresList().subscribe((data: any) => {
      this.fornecedores = data;
    });
  }


  fornecedorDetails(id: number){
    this.router.navigate(['fornecedor-details', id]);
  }

  updateFornecedor(id: number){
    this.router.navigate(['update-fornecedor', id]);
  }

  deleteFornecedor(id: number){
    this.fornecedorService.deleteFornecedor(id).subscribe( data => {
      console.log(data);
      this.getFornecedores();
    })
  }
}
