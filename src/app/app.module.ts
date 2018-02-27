import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CourseeComponent } from './coursee/coursee.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseeComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  // Singleton Pattern DI register
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
