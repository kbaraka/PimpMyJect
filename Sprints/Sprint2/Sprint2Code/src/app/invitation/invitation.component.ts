import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Router, } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-test',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  invitEmail = '';
  projectName = '';
  constructor(private guard: AppGuard, private router: Router, private http: Http) {
  }

  InvitUser() {
    this.http.post('http://localhost:3000/invite', { invitEmail: this.invitEmail, projectName: this.projectName }).subscribe(response => {
      if (JSON.parse(response['_body']).result) {

        alert('Insertion avec succes');

      }
      else {

        alert('!!!! Impossible d insérer !!!!');
      } 

    });

  }
  ngOnInit() {
  }

}
