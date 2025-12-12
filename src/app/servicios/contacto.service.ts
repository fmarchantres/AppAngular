import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'http://localhost:8080/api/contactos'; //URL del backend

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private http: HttpClient) {}

  enviarMensaje(contacto: any): Observable<any> {
    return this.http.post(this.apiUrl, contacto);
  }
}



