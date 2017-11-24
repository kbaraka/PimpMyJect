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

}
