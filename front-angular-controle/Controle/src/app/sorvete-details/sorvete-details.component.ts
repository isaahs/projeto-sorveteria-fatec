import { Component, OnInit } from '@angular/core';
import { Sorvete } from '../sorvete';
import { ActivatedRoute } from '@angular/router';
import { SorveteService } from '../sorvete.service';

@Component({
  selector: 'app-sorvete-details',
  templateUrl: './sorvete-details.component.html',
  styleUrls: ['./sorvete-details.component.css']
})
export class SorveteDetailsComponent implements OnInit {

  id: number
  sorvete: Sorvete
  constructor(private route: ActivatedRoute, private sorveteService: SorveteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sorvete = new Sorvete();
    this.sorveteService.getSorveteById(this.id).subscribe( data => {
      this.sorvete = data;
    });
  }

}
