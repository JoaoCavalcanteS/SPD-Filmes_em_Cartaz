import { Component, OnInit } from '@angular/core';
import { Filmes } from 'src/app/model/filmes';
import { FilmesService } from 'src/app/service/filmes.service';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit{
      panelOpenState = false;
      
      aberto = false;

      listaFilmes: Filmes[] = [];

      filme = new Filmes();

      estaEditando = false;

      constructor(private filmesService: FilmesService) {}
      ngOnInit(): void {
        this.listar();
      }

      listar() {
        this.filmesService.listar().subscribe(filmes => {

          console.log(filmes)

          this.listaFilmes = filmes;
        });
      }

      inserir() {
        this.filmesService.inserir(this.filme).subscribe(filme => {
          this.listar();
        });
      }

      remover(id: number) {
        this.filmesService.excluir(id).subscribe(() => {
          this.listar();
        });
      }

      atualizar() {
        this.filmesService.atualizar(this.filme).subscribe(filme => {
          this.listar();
        })
      }

      salvar() {
        if (this.estaEditando) {
          this.atualizar();
        }
        else {
          this.inserir();
        }
      }

      selecionar(filme: Filmes) {
        this.filme = filme;
        this.estaEditando = true;
      }

      cancelar() {
        this.estaEditando = false;
        this.filme = new Filmes();
      }

      cadastrar(on:boolean) {
        this.aberto = true;
        
      }
}
