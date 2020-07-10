import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';
import {BookDetails} from '../model/bookDetails';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booksList: BookDetails[];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList() {
    this.commonService.getAllBooks().subscribe(data => {
      // @ts-ignore
      this.booksList = data;

      console.log(JSON.stringify(this.booksList));
    });
  }

}
