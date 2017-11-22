import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
 equipe;
  constructor() { }

  ngOnInit() {
    this.equipe = JSON.parse(localStorage.getItem('currentequipe'));
    
  }

}
