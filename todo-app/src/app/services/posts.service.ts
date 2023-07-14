import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url: string = 'https://dummyjson.com/products';
  constructor() {}
  getData() {
    axios.get(`${this.url}`).then((res) => {
      console.log(res.data);
    });
  }
}
