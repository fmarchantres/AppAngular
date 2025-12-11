import { Routes } from '@angular/router';
import {InicioComponent} from "./paginas/pag-inicio/inicio.component";
import {EventosComponent} from "./paginas/pag-eventos/eventos.component";
import {EventoCienciasComponent} from "./paginas/evento-ciencias/evento-ciencias.component";
import {EventoDeportivoComponent} from "./paginas/evento-deportivo/evento-deportivo.component";
import {EventoCulturalComponent} from "./paginas/evento-cultural/evento-cultural.component";
import {PagCalendarioComponent} from "./paginas/pag-calendario/pag-calendario.component";
import {PagLoginComponent} from "./paginas/pag-login/pag-login.component";
import {PagRegistroComponent} from "./paginas/pag-registro/pag-registro.component";
import {PagContactoComponent} from "./paginas/pag-contacto/pag-contacto.component";
import {PagPagoComponent} from "./paginas/pag-pago/pag-pago.component";
import {PagPerfilComponent} from "./paginas/pag-perfil/pag-perfil.component";
import {PagCrearEventoComponent} from "./paginas/pag-crear-evento/pag-crear-evento.component";
import {PagSubidaFotosComponent} from "./paginas/pag-subida-fotos/pag-subida-fotos.component";
import {PagGaleriaComponent} from "./paginas/pag-galeria/pag-galeria.component";
import {PagNotificacionesComponent} from "./paginas/pag-notificaciones/pag-notificaciones.component";


export const routes: Routes = [
  {
    path: 'pag-inicio',
    component: InicioComponent,
  },
  {
    path: '',
    redirectTo: 'pag-inicio',
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
  },
  {
    path: 'evento/:id',
    loadComponent: () =>
      import('./paginas/evento-creado-usuario/evento-creado-usuario.component')
        .then(m => m.EventoCreadoUsuarioComponent)
  }











];
