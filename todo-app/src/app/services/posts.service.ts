import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }
  deleteItem(id: number) {
    console.log(id);
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
