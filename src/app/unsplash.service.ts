import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private apiUrl = 'https://api.unsplash.com/photos';
  private accessKey = 'uYIf4AzU4T5KBvOY7L0P9ng-lZmWE7YrvKg8PpCi8ZU';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<string[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Client-ID ' + this.accessKey
    );

    return this.http.get<any[]>(this.apiUrl, { headers }).pipe(
      map((photos) => {
        return photos.map((photo) => photo.urls.regular);
      })
    );
  }
}
