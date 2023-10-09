

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiteraryService } from '../author.service';

@Component({
  selector: 'app-author-works',
  templateUrl: './author-works.component.html',
  styleUrls: ['./author-works.component.css']
})
export class AuthorWorksComponent implements OnInit {
  works: any[] = [];
  displayedWorks: any[] = [];
  authorName: string = '';
  limit: number = 10;
  offset: number = 0;
  currentPageWorks: number = 1;
  worksPerPage: number = 10;

  constructor(
    private route: ActivatedRoute,
    private literaryService: LiteraryService,

  ) { }

  ngOnInit(): void {
    const authorKey = this.route.snapshot.paramMap.get('key');

    if (authorKey !== null) {
      this.literaryService.getAuthorWorks(authorKey, this.limit, this.offset)
        .subscribe(data => {
          this.works = data.entries;
          this.currentPageWorks = 1;
          this.paginateWorks();
        });
    }
  }
  paginateWorks() {
    const startIndex = (this.currentPageWorks - 1) * this.worksPerPage;
    const endIndex = startIndex + this.worksPerPage;
    this.displayedWorks = this.works.slice(startIndex, endIndex);
  }
  previousPageWorks() {
    if (this.currentPageWorks > 1) {
      this.currentPageWorks--;
      this.paginateWorks();
    }
  }

  nextPageWorks() {
    if (this.currentPageWorks * this.worksPerPage < this.works.length) {
      this.currentPageWorks++;
      this.paginateWorks();
    }
  }

}
