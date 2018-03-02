import { TitleCasePipe } from './titlecase.pipe';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CourseeComponent } from './coursee/coursee.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { DataDisplayService } from './data-display.service';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { PipesUsageComponent } from './components/pipes-usage/pipes-usage.component';
import { PipesCustomComponent } from './components/pipes-custom/pipes-custom.component';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { Assignment3Component } from './components/assignment3/assignment3.component';
import { FavouriteComponent } from './components/favourite/favourite.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseeComponent,
    AuthorComponent,
    DataDisplayComponent,
    TwoWayBindingComponent,
    PipesUsageComponent,
    PipesCustomComponent,
    SummaryPipe,
    Assignment2Component,
    Assignment3Component,
    TitleCasePipe,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Singleton Pattern DI register
  providers: [
    CoursesService,
    AuthorService,
    DataDisplayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
