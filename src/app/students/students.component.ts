import {Component, OnInit} from '@angular/core';
import {CommonService} from '../services/common.service';
import {Student} from '../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentsList: Student[];

  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.getAllRegistered();
  }

  getAllRegistered() {
    this.commonService.getStudent().subscribe(data => {
      // @ts-ignore
      this.studentsList = data;
    });
  }

  accept(student: Student) {
    alert(student);
  }

  reject(student: Student) {
    alert(student);
  }

}
