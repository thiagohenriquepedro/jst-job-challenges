import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.models';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  GetUser(): Observable<any> {
    return this.http.get<any[]>(`${this.url}`);
  }

}
