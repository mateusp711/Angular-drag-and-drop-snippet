import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImportService {
  constructor(private http: HttpClient) {}

  postCSV(file: File, relativePath: string) {
    // You could upload it like this:
    const formData = new FormData();
    formData.append('logo', file, relativePath);

    // Headers
    const headers = new HttpHeaders({
      'security-token': 'mytoken',
    });

    this.http
      .post(
        'https://mybackend.com/api/upload/sanitize-and-save-logo',
        formData,
        { headers: headers, responseType: 'blob' }
      )
      .subscribe((data) => {
        // Sanitized logo returned from backend
      });
  }
}
