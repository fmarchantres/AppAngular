import { Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {EventosComponent} from "./eventos/eventos.component";
import {EventoCienciasComponent} from "./evento-ciencias/evento-ciencias.component";
import {EventoDeportivoComponent} from "./evento-deportivo/evento-deportivo.component";
import {EventoCulturalComponent} from "./evento-cultural/evento-cultural.component";


export const routes: Routes = [
  {
    path: 'inicio', //ruta de la pagina inicio
    component: InicioComponent,
  },
  {
    path: '',
    redirectTo: 'inicio', //ahora redirigue por defecto a inicio
    pathMatch: 'full',
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'evento-ciencias',
    component: EventoCienciasComponent
  },
  {
    path: 'evento-deportivo',
    component: EventoDeportivoComponent
  },
  {
    path: 'evento-cultural',
    component: EventoCulturalComponent
  }





];
