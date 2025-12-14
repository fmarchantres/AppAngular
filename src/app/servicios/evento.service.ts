
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Evento} from "../modelos/evento.model";


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private API_URL = 'http://localhost:8080/api/eventos';

  constructor(private http: HttpClient) {}


  //CRUD

  getEventos(){
    return this.http.get<Evento[]>(this.API_URL);
  }

  getEventoPorId(id: number){
    return this.http.get<Evento>(`${this.API_URL}/${id}`);
  }

  crearEvento(evento : any){
    return this.http.post(`${this.API_URL}/crear`, evento);
  }

  eliminarEvento(id: number){
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  modificarEvento (id: number, evento: Evento){
    return this.http.put(`${this.API_URL}/${id}`, evento);
  }
  actualizarEvento(id: number, datos: any){
    return this.http.put(`${this.API_URL}/${id}`, datos);
  }

}
