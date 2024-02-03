import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../fornecedor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-fornecedor',
  templateUrl: './update-fornecedor.component.html',
  styleUrls: ['./update-fornecedor.component.css']
})
export class UpdateFornecedorComponent implements OnInit {

  id: number;
  fornecedor: Fornecedor = new Fornecedor();
  constructor(private fornecedorService: FornecedorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fornecedorService.getFornecedorById(this.id).subscribe(data => {
      this.fornecedor = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.fornecedorService.updateFornecedor(this.id, this.fornecedor).subscribe( data =>{
      this.goToFornecedorList();
    }
    , error => console.log(error));
  }

  goToFornecedorList(){
    this.router.navigate(['/fornecedores']);
  }
}
