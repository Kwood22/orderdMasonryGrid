import { NgFor } from '@angular/common';
import { Component, HostListener, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss'
})
export class ImageGridComponent {
  @Input() images: Array<string> = [];
  columnizedImages: any[][] = [];
  screenWidth = 0;
  numberOfColumnsToDisplay = 1;

  ngOnInit(): void {
    this.calculateNumberOfColumnsToDisplay(window.innerWidth);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['images']) {
      this.calculateNumberOfColumnsToDisplay(window.innerWidth);
      this.columnizedImages = this.organizeData(this.images);
    }
  }
  calculateNumberOfColumnsToDisplay(screenWidth: number) {
    if (screenWidth >= 640 && screenWidth < 768) {
      this.numberOfColumnsToDisplay = 2;
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      this.numberOfColumnsToDisplay = 3;
    } else if (screenWidth >= 1024) {
      this.numberOfColumnsToDisplay = 4;
    } else {
      this.numberOfColumnsToDisplay = 1;
    }
  }

  organizeData(data: string[]): any[] {
    if (this.numberOfColumnsToDisplay == 1) {
      return [data];
    }

    const columns: any[][] = [];

    for (let i = 0; i < this.numberOfColumnsToDisplay; i++) {
      columns.push([]);
    }

    for (let i = 0; i < data.length; i++) {
      columns[i % this.numberOfColumnsToDisplay].push(data[i]);
    }

    return columns;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('Window resized');
    this.calculateNumberOfColumnsToDisplay(window.innerWidth);
    this.columnizedImages = this.organizeData(this.images);
  }
}
