import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { IUser } from '../../interfaces/IUser';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users$: IUser;
  users: Object;
  user; Object;
  observer: any;

  constructor(public navCtrl: NavController, public data: DataService) {

    this.user = {
      id: 111,
      name: "Leanne Grahamasd",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }

    this.observer = {
      next: function(value) {
        console.log(value)
      }
    }

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.data.getUsers()
    .subscribe(
      data => this.users$ = data,
      err => this.logError(err),
    );
  }

  logError(err) {
    console.log(err);
  }

  createUser() {
    this.data.createUser(this.user)
    .subscribe(
      data => {
        this.getUsers();
      },
      err => this.logError(err));
  }

  deleteUser() {
    this.data.deleteUser(this.user.id)
    .subscribe((data) => {
      this.getUsers();
    },
    err => this.logError(err));
  }
}
