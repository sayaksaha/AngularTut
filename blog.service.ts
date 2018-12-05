import { Blog } from './blog.prop';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BlogService {

  private blogs: Blog[] = [];
  private blogUpdated = new Subject<Blog[]>();

  constructor(private http: HttpClient) { }

  getBlog() {
    this.http
      .get<{ mess: string, blogs: Blog[] }>('http://localhost:3000/api/blogs')
      .subscribe(blogData => {
        this.blogs = blogData.blogs;
        this.blogUpdated.next([...this.blogs]);
      });

  }

  getBlogListener() {
    return this.blogUpdated.asObservable();
  }

  addBlog(title: string, content: string) {
    const blog: Blog = { id: null, title: title, content: content };
    this.http
      .post<{ mess: string }>('http://localhost:3000/api/blogs', blog)
      .subscribe(responseData => {
        console.log(responseData.mess);
        this.blogs.push(blog);
        this.blogUpdated.next([...this.blogs]);
      });
  }
}
