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
    Assignment2Component
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
