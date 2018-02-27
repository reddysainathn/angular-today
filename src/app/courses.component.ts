import { CoursesService } from './courses.service';
import { Component } from "@angular/core";
@Component({
    selector: 'courses',
    template: `<h2>{{ courseName}}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                    {{course}}
                    </li>
                </ul>`
})
export class CourseComponent {
    courseName = "List of Courses";
    courses;
    //Dependency Injection
    constructor(service: CoursesService){
       // let service = new CoursesService();--> Bad approach 
        this.courses= service.getCourses();
    }
}