import { Component } from '@angular/core';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pag-perfil',
  templateUrl: './pag-perfil.component.html',
  styleUrls: ['./pag-perfil.component.scss'],
  standalone: true,
  imports: [PlantillaComponent, IonButton, IonIcon, RouterLink],
})
export class PagPerfilComponent {}
