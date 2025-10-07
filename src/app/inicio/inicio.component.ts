import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterOutlet] //aqui importamos IonicModule
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
