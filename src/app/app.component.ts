import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { UnsplashService } from './unsplash.service';
import { PlaceholderImageService } from './placeholder-image.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ImageGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ordered-masonary-grid';
  images: string[] = [];

  constructor(private unsplashService: UnsplashService, private placeholderImageService: PlaceholderImageService) {
    unsplashService.getPhotos().subscribe((data: string[]) => {
      let placeholders = placeholderImageService.generateImageUrls();
      this.images = placeholders.concat(data)
    });
  }
}
