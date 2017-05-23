import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signup(userObj){
    console.log(userObj)
    return this.http.post('/api/signup',{user: userObj})
}

}
