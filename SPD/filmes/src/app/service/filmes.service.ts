import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filmes } from '../model/filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
//Se não colocar Private, ele não envia
  //OBSERVABLE É OPCIONAL
  constructor(private http:HttpClient) { }

  //GET
  listar(): Observable<Filmes[]>{
    return this.http.get<Filmes[]>('http://localhost:3000/filmes');
  }

  //POST
  inserir(filme: Filmes):Observable<Filmes>{
    return this.http.post<Filmes>('http://localhost:3000/filmes', filme);//precisa do Id e os dados do cliente por inteiro
  }
  //PUT
  atualizar(filme: Filmes){
    return this.http.put<Filmes>(`http://localhost:3000/filmes/${filme.id}`, filme);
  }

  //DELETE
  //any nao se importa com o tipo
  excluir(id: number):Observable<any>{
    //delete nao precisa de tipo
    return this.http.delete(`http://localhost:3000/filmes/${id}`);
  }
}
