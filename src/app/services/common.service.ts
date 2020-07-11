import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Student} from '../model/student';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private authUrl = '/login';
  private registrationUrl = '/saveRegistration';
  private getStudentUrl = '/home';
  private getBooksUrl = '/getBookDetails';
  private addUrl = '/approve';
  private rejectUrl = '/reject';
  private registeredListrl = '/registeredUsers';
  private credentialsUrl = '/getCredentials';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${API_URL + this.authUrl  }`, {userName: username, password: password})
      .pipe(map(result => {
        return result;
      }));
  }

  register(student: Student) {
    return this.http.post(`${API_URL + this.registrationUrl}`, student);
  }

  getPendingStudents() {
    return this.http.get(`${API_URL + this.getStudentUrl}`);
  }

  getAllBooks() {
    return this.http.get(`${API_URL + this.getBooksUrl}`);
  }

  addStudent(student: Student) {
    return this.http.post(`${API_URL + this.addUrl}`, student);
  }

  rejectStudent(student: Student) {
    return this.http.post(`${API_URL + this.rejectUrl}`, student);
  }

  getApprovalList(){
    return this.http.get(`${API_URL + this.registeredListrl}`);
  }

 getCredentials(){
    return this.http.get(`${API_URL + this.credentialsUrl}`);
  }

}
