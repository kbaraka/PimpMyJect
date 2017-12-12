import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../../guard/app.guard';
import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public equipes;
  constructor(private guard: AppGuard, private http: Http, private router: Router) { }

  ngOnInit() {
    this.http.post('http://localhost:3000/equipes', { id: this.guard.GetUser().id}).subscribe(response => {
      this.equipes = JSON.parse(response['_body']).result;
    },
      error => {
        console.log(error);
      });
  }
  Onclick(id) {
    const results = [];
    for (let i = 0; i < this.equipes.length; i++) {
      if (this.equipes[i]['id'] == id) {
        results.push(this.equipes[i]);
      }
    }
    localStorage.setItem('currentequipe', JSON.stringify(results));
   this.router.navigate(['/equipes/workspace']);

  }

}
