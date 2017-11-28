import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint',
    templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

  public sprint;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.http.post('http://localhost:3000/sprints', {idProjet: JSON.parse(localStorage.getItem('currentequipe'))['0'].id}).subscribe(response => {
      this.sprint = response['_body'].result;

    },
      error => {
        console.log(error);
      });
  }

  Onclick(id){
    
  }

}
