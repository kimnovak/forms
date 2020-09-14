import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endpoint = 'http://localhost:8081/users';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.endpoint);
  }

  add(value) {
    return this.http.post(this.endpoint, {data: value});
  }

  update(value) {
    return this.http.put(this.endpoint, {data: value});
  }

  remove(id) {
    return this.http.delete(this.endpoint, {params: {id}});
  }
}
