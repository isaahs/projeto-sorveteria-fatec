import { Component, OnInit } from '@angular/core';
import { Sorvete } from '../sorvete';
import { SorveteService } from '../sorvete.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-sorvete',
  templateUrl: './update-sorvete.component.html',
  styleUrls: ['./update-sorvete.component.css']
})
export class UpdateSorveteComponent implements OnInit {

  id: number;
  sorvete: Sorvete = new Sorvete();
  constructor(private sorveteService: SorveteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sorveteService.getSorveteById(this.id).subscribe(data => {
      this.sorvete = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.sorveteService.updateSorvete(this.id, this.sorvete).subscribe( data =>{
      this.goToSorveteList();
    }
    , error => console.log(error));
  }

  goToSorveteList(){
    this.router.navigate(['/sorvetes']);
  }
}
