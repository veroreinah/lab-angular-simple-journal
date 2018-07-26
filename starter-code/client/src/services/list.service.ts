import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment} from '../environments/environment';

const { baseUrl } = environment;

@Injectable()
export class ListService {
  constructor(private http: Http) { }

  getList(): Observable<Array<object>> {
    return this.http.get(`${baseUrl}/api/journal-entries`)
      .map((res) => res.json());
  }

  getOne(id:string): Observable<object>{
    return this.http.get(`${baseUrl}/api/journal-entries/${id}`)
      .map((res) => res.json());
  }
}