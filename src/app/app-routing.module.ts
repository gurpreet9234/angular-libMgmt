import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import {StudentsComponent} from './students/students.component';
import {BooksComponent} from './books/books.component';


const routes: Routes = [
  { path: 'login', component: LogInComponent},
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
