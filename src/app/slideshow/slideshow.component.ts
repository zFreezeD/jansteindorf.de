import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['coding.jpg', 'colors.jpg', 'unity.png'];
  headlines = [
    'Bring engineering to the next level',
    'Bring colors to the world',
    'Bring games to the people',
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }



  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10)
    }, 8000);
  }

}
