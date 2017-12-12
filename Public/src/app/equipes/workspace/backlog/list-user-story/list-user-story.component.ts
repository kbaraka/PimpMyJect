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
  public testlink;
  public elementTest;
  public doclink;
  public elementDoc;

  constructor(private http: Http) { }

  ngOnInit() {
    this.idBacklog = JSON.parse(localStorage.getItem('currentequipe'));

    this.http.post('http://localhost:3000/listUserStory', { idBacklog: this.idBacklog[0].id }).subscribe(response => {

      this.backlog = JSON.parse(response['_body']).result;
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


  changedTest(event) {
    this.testlink = event.target.innerText;
  }
  lostfocusTest(event) {
    this.elementTest = event.target;


      // tslint:disable-next-line:max-line-length
      this.http.post('http://localhost:3000/changetest', { id: this.elementTest.parentElement.children[0].innerText, description: this.elementTest.parentElement.children[2].innerText, test: this.testlink }).subscribe(response => {
        if (JSON.parse(response['_body']).result) {
          console.log('Test changé');
        }
        // tslint:disable-next-line:one-line
        else {

          alert('Ooups Impossible de changer :(');
        }

      });
  }


  changedDoc(event) {
    this.doclink = event.target.innerText;
  }
  lostfocusDoc(event) {
    this.elementDoc = event.target;


      // tslint:disable-next-line:max-line-length
      this.http.post('http://localhost:3000/changedoc', { id: this.elementDoc.parentElement.children[0].innerText, description: this.elementDoc.parentElement.children[2].innerText, doc: this.doclink }).subscribe(response => {
        if (JSON.parse(response['_body']).result) {
          console.log('Documentation changé');
        }
        // tslint:disable-next-line:one-line
        else {

          alert('Ooups Impossible de changer :(');
        }

      });
  }
}
