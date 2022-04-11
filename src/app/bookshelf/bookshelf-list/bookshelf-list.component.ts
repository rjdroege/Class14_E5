import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {
  @Output() sentBook = new EventEmitter<void>();
  books = [
    {title: "Norwegian Wood", author: "Haruki Murakami"},
    {title: "Empire Falls", author: "Richard Russo"},
    {title: "Rabbit Runs", author: "John Updike"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedBook(book){
    this.sentBook.emit(book);
    console.log(book);
  }

}
