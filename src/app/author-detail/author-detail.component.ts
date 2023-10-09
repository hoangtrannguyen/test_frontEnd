import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiteraryService } from '../author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  author: any = {};
  works: any[] = [];
  limit: number = 10;
  offset: number = 0;

  constructor(
    private route: ActivatedRoute,
    private literaryService: LiteraryService
  ) { }

  ngOnInit(): void {
    const authorKey = this.route.snapshot.paramMap.get('key');

    if (authorKey !== null) {
      this.literaryService.getAuthorDetails(authorKey)
        .subscribe(data => {
          this.author = data;
        });
    } else {
    }
  }
}
