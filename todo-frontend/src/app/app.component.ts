import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding: 50px; font-family: sans-serif;">
      <h1>Minhas Tarefas</h1>
      <input [(ngModel)]="novaTarefa" placeholder="O que fazer?">
      <button (click)="adicionar()">Adicionar</button>

      <ul>
        <li *ngFor="let t of tarefas">
          <input type="checkbox" [checked]="t.completed" (change)="toggle(t)">
          {{ t.title }}
          <button (click)="remover(t.id)">X</button>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  tarefas: any[] = [];
  novaTarefa = '';
  api = 'https://miniature-adventure-v6rwx64476r5cp57-8000.app.github.dev/api/todos/'; // Ajustaremos isso depois

  constructor(private http: HttpClient) {
    this.listar();
  }

  listar() {
    this.http.get(this.api).subscribe((res: any) => this.tarefas = res);
  }

  adicionar() {
    this.http.post(this.api, {title: this.novaTarefa, completed: false})
      .subscribe(() => { this.novaTarefa = ''; this.listar(); });
  }

  toggle(t) {
    t.completed = !t.completed;
    this.http.put(this.api + t.id + '/', t).subscribe();
  }

  remover(id) {
    this.http.delete(this.api + id + '/').subscribe(() => this.listar());
  }
}