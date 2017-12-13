import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-listertache',
  templateUrl: './listertache.component.html',
  styleUrls: ['./listertache.component.css']
})
export class ListertacheComponent implements OnInit {

  public tasks;
  public numTask;
  public idSprint;
  public idProjet;
  public idSprint2;
  constructor(private http: Http) { }

  ngOnInit() {
    this.idSprint = JSON.parse(localStorage.getItem('currentsprint'));
    this.idProjet = JSON.parse(localStorage.getItem('currentequipe'));
    this.http.post('http://localhost:3000/listTasks', { idProjet : this.idProjet[0].id , idSprint: this.idSprint }).subscribe(response => {
      this.tasks = JSON.parse(response['_body']).result;
    },
      error => {
        console.log(error);
      });
  }

  deleteTask(Task) {

    this.idSprint = JSON.parse(localStorage.getItem('currentsprint'));
    this.idProjet = JSON.parse(localStorage.getItem('currentequipe'));
    this.http.post('http://localhost:3000/deleteTask', { idProjet : this.idProjet ,idSprint: this.idSprint, numTask: Task }).subscribe(response => {
      if (JSON.parse(response['_body']).result) {
        console.log('Tache supprimée');
        this.ngOnInit();
      }

      else {

        alert('Ooups Impossible de supprimer :(');
      }

    });
  }

}
