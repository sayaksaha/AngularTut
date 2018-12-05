import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BlogService } from './../blog.service';
import { Blog } from './../blog.prop';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit, OnDestroy {

  blogs: Blog[] = [];

  private blogSub: Subscription;



  constructor(public blogSvc: BlogService) { }

  ngOnInit() {

    this.blogSvc.getBlog();
    this.blogSub = this.blogSvc.getBlogListener()
      .subscribe((blogs: Blog[]) => {
        this.blogs = blogs;

      });

  }

  ngOnDestroy() {

    this.blogSub.unsubscribe();

  }

}
