import { Component, OnInit } from '@angular/core';
import { LiteraryService } from '../author.service';


@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: any[] = [];
  displayedAuthors: any[] = [];
  query: string = '';
  limit: number = 100;
  offset: number = 0;
  currentPage: number = 1;
  authorsPerPage: number = 10;

  constructor(private literaryService: LiteraryService) {

  }

  ngOnInit(): void { }
  searchAuthors(): void {
    this.literaryService.searchAuthors(this.query, this.limit, this.offset)
      .subscribe(data => {
        this.authors = data.docs;
        this.currentPage = 1;
        this.paginateAuthors();
      });
  }
  paginateAuthors() {
    const startIndex = (this.currentPage - 1) * this.authorsPerPage;
    const endIndex = startIndex + this.authorsPerPage;
    this.displayedAuthors = this.authors.slice(startIndex, endIndex);
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateAuthors();
    }
  }
  nextPage() {
    if (this.currentPage * this.authorsPerPage < this.authors.length) {
      this.currentPage++;
      this.paginateAuthors();
    }
  }
}
