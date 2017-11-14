import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  public equipes;
  constructor(private guard: AppGuard, private http: Http) { }

  ngOnInit() {
    // URL params
    let params = new URLSearchParams();
    params.set('id', this.guard.GetUser().id);
    let requestOptions = new RequestOptions();
    requestOptions.params = params;
    requestOptions.responseType = ResponseContentType.Json;

    // Requête GET
    this.http.get('http://localhost:3000/equipes', requestOptions).subscribe(response => {
      this.equipes = response['_body'].result;
    },
      error => {
        console.log(error);
      });
  }
}