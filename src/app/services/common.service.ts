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
  private addStudent_url = '/saveRegistration';
  private getStudent_url = '/home';
  private getBooks_url = '/getBookDetails';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${API_URL + this.authUrl  }`, {userName: username, password: password})
      .pipe(map(result => {
        return result;
      }));
  }

  addStudent(student: Student) {
    return this.http.post(`${API_URL + this.addStudent_url}`, student);
  }

  getStudent() {
    return this.http.get(`${API_URL + this.getStudent_url}`);
  }

  getAllBooks() {
    return this.http.get(`${API_URL + this.getBooks_url}`);
  }

}
