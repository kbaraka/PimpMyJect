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
  }
}