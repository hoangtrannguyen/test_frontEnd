import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiteraryService {
  private baseUrl = 'https://openlibrary.org/search/authors.json';
  private detailUrl = 'https://openlibrary.org/authors';
  constructor(private http: HttpClient) { }

  // Gọi API để tra cứu các tác giả
  searchAuthors(query: string, limit: number, offset: number): Observable<any> {
    const params = new HttpParams()
      .set('q', query)
      .set('limit', limit.toString())
      .set('offset', offset.toString());

    return this.http.get(this.baseUrl, { params });
  }

  // Gọi API để lấy thông tin chi tiết của một tác giả
  getAuthorDetails(key: string): Observable<any> {
    return this.http.get(`${this.detailUrl}/${key}.json`);
  }

  // Gọi API để lấy danh sách tác phẩm của một tác giả
  getAuthorWorks(key: string, limit: number, offset: number): Observable<any> {
    const worksApiUrl = `${this.detailUrl}/${key}/works.json`;
    const params = {
      limit: limit.toString(),
      offset: offset.toString()
    };
    return this.http.get(worksApiUrl, { params });
  }
}
