import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprintworkspace',
  templateUrl: './sprintworkspace.component.html',
  styleUrls: ['./sprintworkspace.component.css']
})
export class SprintworkspaceComponent implements OnInit {
  numerosprint;
  constructor() { }

  ngOnInit() {
    this.numerosprint = JSON.parse(localStorage.getItem('currentsprint'));
  }

}
