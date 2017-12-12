import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css']
})
export class CreateSprintComponent implements OnInit {
  numberSprint = '';
  startDate = '';
  endDate = '';
  idprojet = '';
  myGroup: FormGroup;
  firstName: FormControl;
  myGroupf: FormGroup;
  nbsp: FormControl;
  sdate: FormControl;
  edate: FormControl;
  constructor(private router: Router, private http: Http) {
    this.firstName = new FormControl('', Validators.required);
    this.myGroup = new FormGroup({

      firstName: this.firstName,

    });

    this.nbsp = new FormControl('', Validators.required);
    this.sdate = new FormControl('', Validators.required);

    this.edate = new FormControl('', Validators.required);
    this.myGroupf = new FormGroup({

      nbsp: this.nbsp,
      sdate: this.sdate,
      edate: this.edate,

    });
  }

  createSprint() {
    this.http.post('http://localhost:3000/createsprint', {
      numberSprint: this.numberSprint,
      startDate: this.startDate,
      endDate: this.endDate,
      idprojet: JSON.parse(localStorage.getItem('currentequipe'))['0'].id
    }).subscribe(response => {

      if (JSON.parse(response['_body']).result) {

        console.log('Création du Sprint avec succes');
      }
      else {
        alert('!!!! Impossible de créer le Sprint!!!!');
      }

    });

  }
  ngOnInit() {
  }

}
