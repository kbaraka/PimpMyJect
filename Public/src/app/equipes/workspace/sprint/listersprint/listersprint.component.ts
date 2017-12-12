import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listersprint',
  templateUrl: './listersprint.component.html',
  styleUrls: ['./listersprint.component.css']
})
export class ListersprintComponent implements OnInit {
  public proporties;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.http.post('http://localhost:3000/sprints', { idprojet: JSON.parse(localStorage.getItem('currentequipe'))['0'].id }).subscribe(response => {
      this.proporties = JSON.parse(response['_body']).result;

    },
      error => {
        console.log(error);
      });
  }

  Onclick(id) {
    localStorage.setItem('currentsprint', id);
    this.router.navigate(['/equipes/workspace/sprints/sprintworkspace/']);
  }


}
