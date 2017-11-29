import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Http } from '@angular/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private guard: AppGuard, private http: Http) { }

  ngOnInit() {
  }
  CreateProject(project)
  {
    // tslint:disable-next-line:max-line-length
    this.http.post('http://localhost:3000/createproject', { project: project.value, user: this.guard.GetUser()['id'] }).subscribe(response => {
      if (JSON.parse(response['_body']).result) {

        alert('Projet créer avec succes');
      }
      else {

        alert('!!!! Impossible d insérer !!!!');
      }

    });
  }

}
