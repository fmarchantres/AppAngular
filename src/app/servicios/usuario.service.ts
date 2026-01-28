import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface Usuario {
  id?: number;
  nombre: string;
  primerApellido: string;
  segundoApellido?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = `${environment.apiUrl}/api/usuarios`;
  //private apiUrl = 'http://localhost:8080/api/usuarios'; // URL del backend

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private http: HttpClient) {}

  //LOGIN DEL USUARIO
  login(email: string, password: string) {
    return this.http.post<Usuario>(
      `${this.apiUrl}/login`,
      { email, password }
    );
  }





  //REGISTRO DEL USUARIO
  registrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/registrar`, usuario);
  }


  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  eliminarUsuario(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }



}


