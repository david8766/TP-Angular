import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ulist',
  templateUrl: './ulist.component.html',
  styleUrls: ['./ulist.component.css']
})
export class UlistComponent {

  users = [
    {
      id: 1,
      login: "David",
      role: "admin",
      password: "david"
    },
    {
      id: 2,
      login: "Marcel",
      role: "user",
      password: "marcel"
    },
    {
      id: 1,
      login: "Sophie",
      role: "user",
      password: "sophie"
    },
    {
      id: 1,
      login: "Elodie",
      role: "user",
      password: "elodie"
    },
    {
      id: 1,
      login: "Jean",
      role: "user",
      password: "jean"
    }

  ]
  
}
