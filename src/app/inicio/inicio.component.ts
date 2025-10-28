import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink, RouterOutlet} from "@angular/router";
import {PlantillaComponent} from "../plantilla/plantilla.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterOutlet, RouterLink, PlantillaComponent] //aqui importamos IonicModule
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
