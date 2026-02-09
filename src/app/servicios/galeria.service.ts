import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  private storageKey = 'galeria_fotos';
  private imagenes: string[] = [];

  constructor() {
    this.cargarDesdeStorage();
  }

  private cargarDesdeStorage() {
    const data = localStorage.getItem(this.storageKey);
    this.imagenes = data ? JSON.parse(data) : [];
  }

  private guardarEnStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.imagenes));
  }

  agregarImagen(url: string) {
    this.imagenes.push(url);
    this.guardarEnStorage();
  }

  obtenerImagenes(): string[] {
    return [...this.imagenes];
  }

  limpiarGaleria() {
    this.imagenes = [];
    localStorage.removeItem(this.storageKey);
  }
}
