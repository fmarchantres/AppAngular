import { Component, OnInit, ViewChild } from '@angular/core';
import { TarjetaEventoComponent } from "../tarjeta-evento/tarjeta-evento.component";

@Component({
  selector: 'app-evento-cultural',
  templateUrl: './evento-cultural.component.html',
  styleUrls: ['./evento-cultural.component.scss'],
  standalone: true,
  imports: [TarjetaEventoComponent]
})
export class EventoCulturalComponent implements OnInit {
  @ViewChild(TarjetaEventoComponent) tarjetaEvento!: TarjetaEventoComponent;

  ngOnInit() {
    // Cuando se crea la página, no hace nada todavía
  }

  ionViewWillEnter() {
    //Esto se ejecuta cada vez que la página es visible (Ionic hook)
    if (this.tarjetaEvento) {
      this.tarjetaEvento.registrado = false;
      this.tarjetaEvento.interesado = false;
    }
  }
}
