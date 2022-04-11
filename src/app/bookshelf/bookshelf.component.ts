import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Output() selectedBook = new EventEmitter<{}>();
  constructor() { }

  ngOnInit(): void {
  }

  onBookReceipt({}){
    this.selectedBook.emit();
  }
}
