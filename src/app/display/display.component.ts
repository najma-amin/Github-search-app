import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { Repos } from '../repos/repos';
import { HttpServicesService } from '../services/http-services.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  myUser: User[];
  myRepos: Repos[];  

  constructor(private http:HttpServicesService) { }

  ngOnInit() {
  }

  locateName(searchusername){
  this.http.getAcc(searchusername).then(
    (success)=>{
      this.myUser=this.http.myUsers;
      console.log(this.myUser)
    }, (error)=>{
      console.log(error)
    }
  )
  
  this.http.getRepos(searchusername).then(
    (success)=>{
      this.myRepos=this.http.myRepos;
    }, (error)=>{
      console.log(error)
    }
  )

  }
}
