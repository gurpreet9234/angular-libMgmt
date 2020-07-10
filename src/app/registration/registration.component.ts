import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  student: Student = new Student();

  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
  }

  signUp(): void {
    alert(JSON.stringify(this.student));
    this.commonService.addStudent(this.student).subscribe(data =>{
      alert(data);
    });
  }



}
