export interface Evento {
  id?: number;
  nombre?: string;
  descripcion?: string;
  fecha?: string;
  lugar?: string;
  requisitos?: string;
  precio?: number | null;
  usuarioId?: number | null;
  urlImagen?: string;
}
