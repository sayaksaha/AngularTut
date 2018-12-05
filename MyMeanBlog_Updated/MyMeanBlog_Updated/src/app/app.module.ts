import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { BlogListComponent } from './Blog/Blog-list/blog-list.component';
import { HomeComponent } from './Home/Home.component';
import { BlogAddComponent } from './Blog/blog-add/blog-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    HomeComponent,
    BlogAddComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
{path:'home',component:HomeComponent},
{path:'movies',component:BlogAddComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',redirectTo:'home',pathMatch:'full'}



    ])



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
