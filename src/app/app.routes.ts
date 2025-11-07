import { Routes } from '@angular/router';
import {InicioComponent} from "./pag-inicio/inicio.component";
import {EventosComponent} from "./pag-eventos/eventos.component";
import {EventoCienciasComponent} from "./evento-ciencias/evento-ciencias.component";
import {EventoDeportivoComponent} from "./evento-deportivo/evento-deportivo.component";
import {EventoCulturalComponent} from "./evento-cultural/evento-cultural.component";
import {PagCalendarioComponent} from "./pag-calendario/pag-calendario.component";
import {PagLoginComponent} from "./pag-login/pag-login.component";
import {PagRegistroComponent} from "./pag-registro/pag-registro.component";
import {PagContactoComponent} from "./pag-contacto/pag-contacto.component";
import {PagPagoComponent} from "./pag-pago/pag-pago.component";
import {PagPerfilComponent} from "./pag-perfil/pag-perfil.component";
import {PagCrearEventoComponent} from "./pag-crear-evento/pag-crear-evento.component";
import {PagSubidaFotosComponent} from "./pag-subida-fotos/pag-subida-fotos.component";
import {PagGaleriaComponent} from "./pag-galeria/pag-galeria.component";
import {PagNotificacionesComponent} from "./pag-notificaciones/pag-notificaciones.component";


export const routes: Routes = [
  {
    path: 'pag-inicio', //ruta de la pagina pag-inicio
    component: InicioComponent,
  },
  {
    path: '',
    redirectTo: 'pag-inicio', //ahora redirigue por defecto a pag-inicio
    pathMatch: 'full',
  },
  {
    path: 'pag-eventos',
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
  },
  {
    path: 'pag-crear-evento',
    component: PagCrearEventoComponent
  },
  {
    path: 'pag-subida-fotos',
    component: PagSubidaFotosComponent
  },
  {
    path: 'pag-galeria',
    component: PagGaleriaComponent
  },
  {
    path: 'pag-notificaciones',
    component: PagNotificacionesComponent
  }










];
