import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderImageService {

  constructor() { }

  generateImageUrls(): string[] {
    const imageUrls: string[] = [];

    for (let i = 1; i <= 10; i++) {
      const width = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
      const height = Math.floor(Math.random() * (650 - 240 + 1)) + 240;
      const text = i.toString(); 
      const imageUrl = `https://place-hold.it/${width}x${height}/000/fff?text=${text}&fontsize=50`;
      imageUrls.push(imageUrl);
    }

    return imageUrls;
  }
}
