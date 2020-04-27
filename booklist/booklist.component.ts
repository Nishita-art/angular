import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../booklist.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private booklistService: BooklistService) { }
  books: any[];
  
  ngOnInit(): void {

  this.booklistService.getbooklists().subscribe(
    data=> this.books=data);
  }
}
