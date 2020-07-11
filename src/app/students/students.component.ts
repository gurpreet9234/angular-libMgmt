import {Component, OnInit} from '@angular/core';
import {CommonService} from '../services/common.service';
import {Student} from '../model/student';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';

// This lets me use jquery
declare var $: any;

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  pendingRequestList: Student[];
  registeredStudentsList: Student[];
  credenialsList: any = {};
  password: any;

  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.getAllRequests();
    this.getApprovedList();
    this.addCredentials();
  }

  getAllRequests(): void {
    this.commonService.getPendingStudents().subscribe(data => {
      // @ts-ignore
      this.pendingRequestList = data;
    });
  }

  getApprovedList(): void {
    this.commonService.getApprovalList().subscribe(data => {
      // @ts-ignore
      this.registeredStudentsList = data;
    });
  }

  accept(student: Student): void {
    this.commonService.addStudent(student).subscribe(data => {
      // @ts-ignore
      this.pendingRequestList = this.pendingRequestList.filter(h => h !== student);
      // @ts-ignore
      this.registeredStudentsList.push(data);
      this.addCredentials();
    });
  }

  reject(student: Student): void {
    this.commonService.rejectStudent(student).subscribe(data => {
      // @ts-ignore
      this.pendingRequestList = this.pendingRequestList.filter(h => h !== student);
    });
  }

  addCredentials(): void {
    this.commonService.getCredentials().subscribe(data => {
      // @ts-ignore
      this.credenialsList = data;
      console.log(this.credenialsList);
    });
  }

  getPassword(email): void {
    this.password = this.credenialsList[email];
    (<any> $('#myModal')).modal('show');
  }

}
