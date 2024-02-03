import { Component, OnInit } from '@angular/core';
import { Sorvete } from '../sorvete'
import { SorveteService } from '../sorvete.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sorvete-list',
  templateUrl: './sorvete-list.component.html',
  styleUrls: ['./sorvete-list.component.css']
})
export class SorveteListComponent implements OnInit {

  sorvetes: Sorvete[];

  constructor(private sorveteService: SorveteService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSorvetes();
  }

   private getSorvetes(){
    this.sorveteService.getSorvetesList().subscribe((data: any) => {
      this.sorvetes = data;
    });
  }


  sorveteDetails(id: number){
    this.router.navigate(['sorvete-details', id]);
  }

  updateSorvete(id: number){
    this.router.navigate(['sorvete-update', id]);
  }

  deleteSorvete(id: number){
    this.sorveteService.deleteSorvete(id).subscribe( data => {
      console.log(data);
      this.getSorvetes();
    })
  }
}
