import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { Http } from '@angular/http';

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
  
  constructor(private router: Router, private http: Http) { }
 
  createSprint(){
    this.http.post('http://localhost:3000/createsprint', {
        numberSprint: this.numberSprint,
        startDate: this.startDate,
        endDate: this.endDate,
        idprojet: JSON.parse(localStorage.getItem('currentequipe'))['0'].id
       }).subscribe(response => {
         
      if (JSON.parse(response['_body']).result ) {

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
