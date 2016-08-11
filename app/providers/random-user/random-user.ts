import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RandomUser {

  constructor(private http: Http) { }

  loadUser() {
    return this.http.get('https://randomuser.me/api/?results=10')
      .map((res: Response) => res.json())
  }

}
