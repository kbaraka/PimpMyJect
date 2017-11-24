import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-list-user-story',
  templateUrl: './list-user-story.component.html',
  styleUrls: ['./list-user-story.component.css']
})
export class ListUserStoryComponent implements OnInit {
  public idBacklog;
  public backlog;
  public prio;

  public element;
  constructor(private http: Http) { }

  ngOnInit() {
    this.idBacklog = JSON.parse(localStorage.getItem('currentequipe'));
    let params = new URLSearchParams();
    params.set('idBacklog', this.idBacklog[0].id);
    let requestOptions = new RequestOptions();
    requestOptions.params = params;
    requestOptions.responseType = ResponseContentType.Json;

    // Requête GET
    this.http.get('http://localhost:3000/listUserStory', requestOptions).subscribe(response => {

      this.backlog = response['_body'].result;
    },
      error => {
        console.log(error);
      });
  }
  changed(event) {
    this.prio = event.target.innerText;
  }
  lostfocus(event) {
    this.element = event.target;
    if (isNaN(this.prio) || this.prio.length == 0) {
      this.element.innerText = this.element.parentElement.children[4].innerText;
    }
    // tslint:disable-next-line:one-line
    else {

      // tslint:disable-next-line:max-line-length
      this.http.post('http://localhost:3000/changeprio', { id: this.element.parentElement.children[0].innerText, description: this.element.parentElement.children[2].innerText, prio: this.prio }).subscribe(response => {
        if (JSON.parse(response['_body']).result) {
          console.log('Prio changé');
        }
        // tslint:disable-next-line:one-line
        else {

          alert('Ooups Impossible de changer :(');
        }

      });
    }
  }


}
