import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy {
  // variables
  responseData = <any>[];
  private apiSubscription: Subscription | undefined;

  // constructor
  constructor(private postService: PostsService) {}

  // fetching data from api
  fetchData(): void {
    this.apiSubscription = this.postService.getData().subscribe({
      next: (res) => {
        console.log(res);
        this.responseData = res.products;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('API CALL DONE');
      },
    });
  }
  // fetching data on mount
  ngOnInit(): void {
    this.fetchData();
  }

  // deleting item
  deleteProd(id: number): void {
    this.postService.deleteItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.fetchData();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('DELETE Completed');
      },
    });
  }

  // performing cleanup on destroying component
  ngOnDestroy(): void {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }
}
