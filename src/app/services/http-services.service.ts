import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Repos } from '../repos/repos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  myUsers:User[];
  myRepos:Repos[];
  
  constructor(private http:HttpClient) { }

  url= 'https://api.github.com/users/'; 
  accessToken = '?access_token=' + environment.APIKEY;

  getAcc(searchusername:string){
    interface data{
      name:string,
      login:string,
      avatar_url:string,
      html_url:string,
      followers_url:string,
      following_url:string,
      repos_url:string
    }

    let promise=new Promise((resolve, reject)=>{
      this.myUsers=[];
       this.http.get<data>(this.url+searchusername+this.accessToken).toPromise().then(
         (result)=>{
           this.myUsers.push(result);
           resolve();
         }, (error)=>{
           reject(error);
         }
       )
    })
    return promise;
  }

  getRepos(searchusername:string){
    interface repData{
      name:string,
      html_url:string,
      description:string,
      language:string
    }

    let promise=new Promise ((resolve, reject)=>{
      this.myRepos=[];
      this.http.get<repData>(this.url+searchusername+"/repos"+this.accessToken).toPromise().then(
        (result)=>{
          this.myRepos.push(result);
          resolve();
        },
        (error)=>{
          reject(error);
        }
      )     
    })
    return promise;
  }

}
