import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';


@Component({
  selector: 'app-liste-build',
  templateUrl: './liste-build.component.html',
  styleUrls: ['./liste-build.component.css']
})
export class ListeBuildComponent implements OnInit {

  public buildElement;
  public numProjet;
  public numSprint;
  public affichageBuild;
  public buildLink;
  public elementBuild;

  constructor(private http: Http) { }

  ngOnInit() {
    this.numProjet = JSON.parse(localStorage.getItem('currentequipe'));
    this.numSprint = JSON.parse(localStorage.getItem('currentsprint'));

    this.http.post('http://localhost:3000/listSprintBuild', { numProjet: this.numProjet[0].id, numSprint: this.numSprint }).subscribe(response => {

        this.affichageBuild = JSON.parse(response['_body']).result;

      },
      error => {
        console.log(error);
      });


  }

  changedBuild(event) {
    this.buildLink = event.target.innerText;
  }

  lostfocusBuild(event) {
    this.elementBuild = event.target;
    // tslint:disable-next-line:max-line-length
    this.http.post('http://localhost:3000/listSprintBuildChange', { numProjet: this.numProjet[0].id, numSprint: this.numSprint, newBuild: this.buildLink }).subscribe(response => {
      if (JSON.parse(response['_body']).result) {
        console.log('Build changé');
      }
      // tslint:disable-next-line:one-line
      else {

        alert('Ooups Impossible de changer :(');
      }

    });
  }
}
