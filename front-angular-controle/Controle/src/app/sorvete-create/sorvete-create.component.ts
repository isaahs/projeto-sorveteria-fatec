import { Component, OnInit } from '@angular/core';
import { Sorvete } from '../sorvete';
import { SorveteService } from '../sorvete.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sorvete',
  templateUrl: './create-sorvete.component.html',
  styleUrls: ['./create-sorvete.component.css']
})
export class CreateSorveteComponent implements OnInit {

  sorvete: Sorvete = new Sorvete();
  constructor(private sorveteService: SorveteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSorvete(){
    this.sorveteService.createSorvete(this.sorvete).subscribe(data =>{
      console.log(data);
      this.goToSorveteList();
    },
    error => console.log(error));
  }

  goToSorveteList(){
    this.router.navigate(['/sorvetes']);
  }
  
  onSubmit(){
    console.log(this.sorvete);
    this.saveSorvete();
  }
}