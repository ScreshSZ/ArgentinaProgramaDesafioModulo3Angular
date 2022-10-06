import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  informacionProyectos:any

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos1().subscribe(data =>{
      console.log("Servicio desde Perfil funcionando");
      console.log(data.proyectos);
      this.informacionProyectos=data.proyectos;
    });
  }

}
