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
  private addStudenet_url = '/add';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${API_URL + this.authUrl}`, {username: username, password: password})
      .pipe(map(result => {
        return result;
      }));
  }

  addStudent(student: Student) {
    return this.http.post(`${API_URL + this.addStudenet_url}`, student);
  }
}
