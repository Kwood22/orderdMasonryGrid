import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderImageService {

  constructor() { }

  generateImageUrls(): string[] {
    const imageUrls: string[] = [];

    for (let i = 1; i <= 10; i++) {
      const width = 300 + i * 70;
      const text = i.toString(); 
      const imageUrl = `https://place-hold.it/${width}/000/fff?text=${text}&fontsize=50`;
      imageUrls.push(imageUrl);
    }

    return imageUrls;
  }
}
