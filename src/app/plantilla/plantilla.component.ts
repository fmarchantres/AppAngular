import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-plantilla',
    templateUrl: './plantilla.component.html',
    styleUrls: ['./plantilla.component.scss'],
  imports: [
    IonicModule,
    RouterLink
  ]
})
export class PlantillaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
