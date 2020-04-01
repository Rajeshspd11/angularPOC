import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private user: User;
  private condition :  Boolean ;
  private users = [
    {id:1, name: "Test", age: 25, active: true},
    {id:2, name: "Test1", age: 22, active: false},
    {id:3, name: "Test2", age: 20, active: true},
    {id:4, name: "Test3", age: 32, active: false}
  ];

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.condition =!this.condition;
  }

}
