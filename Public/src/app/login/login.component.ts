import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Router, } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private guard: AppGuard, private router: Router, private http: Http) {
  }
  Onclick() {
    if (this.email === '' || this.password === '') {
      alert("Veuillez Remplir le formulaire");
    }
    else {
      this.http.post('http://localhost:3000/user', { email: this.email, password: this.password }).subscribe(response => {
        if (JSON.parse(response['_body']).result) {
          this.guard.SetUser(JSON.parse(response['_body']).result);
          this.guard.LogIn();
          localStorage.setItem('token', 'true');
          localStorage.setItem('user', JSON.stringify(JSON.parse(response['_body']).result));
          this.router.navigate(['/equipes']);
        } else {
          alert('!!!!Utilisteur Inconu Veuillez resaisir un Email et Password Valid !!!!');
          this.router.navigate(['/login']);
        }

      });
    }


  }

  ngOnInit() {
    if (this.guard.canActivate() == true) { this.router.navigate(['/equipes']); }
  }
  Onclick2() {
    if (this.email === '' || this.password === '') {
      alert("Veuillez Remplir le formulaire");
    }
    else {
      this.http.post('http://localhost:3000/addUser', { email: this.email, password: this.password }).subscribe(response => {

        if (JSON.parse(response['_body']).result) {
          alert("Vous  êtes bien inscrit veuillez vous connecter");
        } else {
          alert('!!!! Information Incorrect !!!!');
          this.router.navigate(['/login']);
        }

      });
    }
  }

}
