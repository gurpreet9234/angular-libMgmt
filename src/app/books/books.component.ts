import {Component, OnInit} from '@angular/core';
import {CommonService} from '../services/common.service';
import {BookDetails} from '../model/bookDetails';
import {Student} from '../model/student';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booksList: BookDetails[];
  selectedBookList: BookDetails[] = [];

  email: any;

  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.getBooksList();
    const emailId = localStorage.getItem('username');
    if (emailId !== 'admin') {
      this.email = emailId;
    }

  }

  getBooksList(): void {
    this.commonService.getAllBooks().subscribe(data => {
      // @ts-ignore
      this.booksList = data;
    });
  }

  selectBook(book, event): void {
    if (this.selectedBookList.length <= 2) {
      this.selectedBookList.push(book);
    } else {
      event.target.checked = false;
      alert('Sorry, you have been selected maximum books');
      return;
    }
  }

  submit(): void {
    const booksDetails = {
      email: this.email,
      booksList: this.selectedBookList
    };


    alert(JSON.stringify(booksDetails));
  }

}

