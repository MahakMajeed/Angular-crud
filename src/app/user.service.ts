import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get('https://gorest.co.in/public/v2/users')
  }
  postData(data: any){
   return this.http.post('https://gorest.co.in/public/v2/users',data)
  }
  getOneData(id:any){
    return this.http.get(` https://gorest.co.in/public/v2/users/${id}`)
   
  }
  putData(editData:any, dataId:any){
  return this.http.put<any>(`https://gorest.co.in/public/v2/users/${dataId}`, editData )
  }
  }

