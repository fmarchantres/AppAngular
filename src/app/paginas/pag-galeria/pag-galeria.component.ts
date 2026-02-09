import { Component, OnInit } from '@angular/core'; // Añadimos OnInit
import { PlantillaComponent } from "../plantilla/plantilla.component";
import { IonGrid, IonRow, IonCol, IonModal, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from "@angular/router"; // Añadimos ActivatedRoute
import { HttpClient } from '@angular/common/http'; // Importante
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-pag-galeria',
  templateUrl: './pag-galeria.component.html',
  styleUrls: ['./pag-galeria.component.scss'],
  standalone: true,
  imports: [
    PlantillaComponent, IonGrid, IonRow, IonCol, IonModal,
    IonButton, IonIcon, CommonModule, RouterLink
  ]
})
export class PagGaleriaComponent implements OnInit {

  fotos: any[] = []; // Empezamos con el array vacío
  idEvento: number = 0;
  // Cambia esto por tu URL real de Render cuando hagas el deploy
  private API_URL = 'http://localhost:8080/api/fotos';
  private SERVER_BASE = 'http://localhost:8080';

  mostrarModal: boolean = false;
  indexActual: number = 0;
  fotoSeleccionada: any = '';

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    addIcons({ camera });
  }

  ngOnInit() {
    // Obtenemos el ID del evento de la URL (ej: /galeria/5)
    this.idEvento = Number(this.route.snapshot.paramMap.get('id')) || 1;
    this.cargarFotosServidor();
  }

  // Carga las fotos que ya existen en la DB
  cargarFotosServidor() {
    this.http.get<any[]>(this.API_URL).subscribe({
      next: (data) => {
        // Mapeamos las URLs para que incluyan la dirección del servidor
        this.fotos = data
          .filter(f => f.evento && f.evento.id === this.idEvento)
          .map(f => this.SERVER_BASE + f.url);
      },
      error: (err) => console.error('Error cargando fotos', err)
    });
  }

  async capturarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 60, // Reducimos un poco para no saturar la red
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        saveToGallery: true
      });

      if (image.webPath) {
        // 1. Mostrar visualmente de inmediato
        const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
        this.fotos.unshift(safeUrl);

        // 2. Convertir la ruta de la cámara en un Archivo (Blob)
        const response = await fetch(image.webPath);
        const blob = await response.blob();

        // 3. Enviar al servidor
        this.subirAlServidor(blob);
      }
    } catch (error) {
      console.error('Error al capturar foto:', error);
    }
  }

  subirAlServidor(blob: Blob) {
    const formData = new FormData();
    // 'file' debe coincidir con @RequestParam("file") en tu FotoController
    formData.append('file', blob, `foto_${Date.now()}.jpg`);

    const urlUpload = `${this.API_URL}/eventos/${this.idEvento}/upload`;

    this.http.post(urlUpload, formData).subscribe({
      next: (res) => console.log('¡Foto guardada en el servidor!', res),
      error: (err) => console.error('Error al subir:', err)
    });
  }

  // Métodos del modal se mantienen igual...
  abrirFoto(index: number) {
    this.indexActual = index;
    this.fotoSeleccionada = this.fotos[index];
    this.mostrarModal = true;
  }
  cerrarModal() { this.mostrarModal = false; }
  fotoAnterior() { /* ... igual ... */ }
  fotoSiguiente() { /* ... igual ... */ }
}
