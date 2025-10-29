import { Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {EventosComponent} from "./eventos/eventos.component";
import {EventoCienciasComponent} from "./evento-ciencias/evento-ciencias.component";
import {EventoDeportivoComponent} from "./evento-deportivo/evento-deportivo.component";
import {EventoCulturalComponent} from "./evento-cultural/evento-cultural.component";
import {PagCalendarioComponent} from "./pag-calendario/pag-calendario.component";
import {PagLoginComponent} from "./pag-login/pag-login.component";
import {PagRegistroComponent} from "./pag-registro/pag-registro.component";
import {PagContactoComponent} from "./pag-contacto/pag-contacto.component";
import {PagPagoComponent} from "./pag-pago/pag-pago.component";
import {PagPerfilComponent} from "./pag-perfil/pag-perfil.component";


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
  },
  {
    path: 'pag-calendario',
    component: PagCalendarioComponent
  },
  {
    path: 'pag-login',
    component: PagLoginComponent
  },
  {
    path: 'pag-registro',
    component: PagRegistroComponent
  },
  {
    path: 'pag-contacto',
    component: PagContactoComponent
  },
  {
    path: 'pag-pago',
  component: PagPagoComponent
  },
  {
    path: 'pag-perfil',
    component: PagPerfilComponent
  }







];
