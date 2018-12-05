import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from './../blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {
  constructor(public blogSvc: BlogService) { }
  onAddBlog(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.blogSvc.addBlog(form.value.title, form.value.content);
    form.resetForm();

    //  this.check = form.value.MovieName;


  }
}
