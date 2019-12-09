import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() searchName=new EventEmitter <any>();

  searchusername:string;

  searchUser(){
    this.searchName.emit(this.searchusername);
  }

  constructor() { }

  ngOnInit() {
  }

}
