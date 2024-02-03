import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor';
import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-details',
  templateUrl: './fornecedor-details.component.html',
  styleUrls: ['./fornecedor-details.component.css']
})
export class FornecedorDetailsComponent implements OnInit {

  id: number
  fornecedor: Fornecedor
  constructor(private route: ActivatedRoute, private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fornecedor = new Fornecedor();
    this.fornecedorService.getFornecedorById(this.id).subscribe( data => {
      this.fornecedor = data;
    });
  }

}
