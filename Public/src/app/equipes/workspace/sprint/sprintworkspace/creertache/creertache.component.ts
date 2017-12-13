import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creertache',
  templateUrl: './creertache.component.html',
  styleUrls: ['./creertache.component.css']
})
export class CreertacheComponent implements OnInit {

  public tasknumber;
  public usnumber;
  public description;
  public person;
  public status;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  public createTask(selectedValue): void {
    const idSprint = JSON.parse(localStorage.getItem('currentsprint'));
    const idProjet = JSON.parse(localStorage.getItem('currentequipe'));

    if (this.usnumber && this.description && this.person && this.status) {
        this.http.post('http://localhost:3000/addTask', {
              idsprint: idSprint, idprojet: idProjet, tasknumber: this.tasknumber,
              usnumber: this.usnumber, description: this.description,
              person: this.person, status: this.status, test: selectedValue
            }).subscribe(response => {
          if (JSON.parse(response['_body']).result) {
            console.log('tâche créée');
          } else {
            console.log('Erreur dans la création de la tâche');
          }

        });
    }
  }
}
