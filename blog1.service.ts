import { Blog } from './blog.prop';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class BlogService {

  private blogs: Blog[] = [];
  private blogUpdated = new Subject<Blog[]>();

  constructor(private http: HttpClient) { }

  getBlog() {
    this.http
      .get<{ mess: string, blogs: any }>('http://localhost:3000/api/blogs')
      .pipe(map((blogData) => {
        return blogData.blogs.map(blog => {
          return {
            title: blog.title,
            content: blog.content,
            id: blog._id
          };
        });
      }))
      .subscribe(ChangedBlog => {
        this.blogs = ChangedBlog;
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
