import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../../../../guard/app.guard';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-create-user-story',
  templateUrl: './create-user-story.component.html',
  styleUrls: ['./create-user-story.component.css']
})
export class CreateUserStoryComponent implements OnInit {
  private _http: Http;
  private inputNumber;
  private inputPriority;
  private inputDifficulty;
  private inputDescription;

  public constructor(private http: Http) {
      this._http = http;
  }

  ngOnInit() {
  }

  public insertUS(): void {
    this.http.post('http://localhost:3000/backlog/create-us',
    { projectID: JSON.parse(localStorage.getItem('currentequipe'))['0'].id, numberUS: this.inputNumber, priorityUS: this.inputPriority,
      difficultyUS: this.inputDifficulty, descriptionUS: this.inputDescription }).subscribe(response => {
      if (JSON.parse(response['_body']).result === 'invalid form') {
        alert('Veuillez remplir le formulaire en entier.');
      }
      else if (JSON.parse(response['_body']).result === 1) {
        console.log('Insertion réalisée.');
        this.inputDescription = '';
        this.inputNumber = '';
        this.inputPriority = '';
        this.inputDifficulty = '';
      }
      else {
        alert('Une erreur est survenue.');
      }
    });
  }

}
