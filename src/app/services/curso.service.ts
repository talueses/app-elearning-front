import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private API_URI = "https://jsonplaceholder.typicode.com/posts"; //<-- cambiar por el endpoint

  constructor(private http:HttpClient) { }

  getMyCursos(idUsuario){
    return this.http.get(`${this.API_URI}/mycourses/${idUsuario}`);
  }

}
