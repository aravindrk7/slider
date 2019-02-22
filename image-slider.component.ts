import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as data from '../image-slider/image.json';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  imageName: string = "Desert";
  //names: any = ["Desert", "Koala", "Jellyfish", "Tulips", "Hydrangeas"];
  nextCount = 0;
  prevCount = data["default"].names.length;
  constructor() {
  }
  @ViewChild('image') image: ElementRef;
  ngOnInit() {
  }

  nextImage(nextCount) {
    console.log(data["default"].names);
    this.nextCount++;
    console.log(nextCount);
    if (this.nextCount >= data["default"].names.length) {
      this.nextCount = this.nextCount % data["default"].names.length;
    }
    this.imageName = data["default"].names[this.nextCount];
    setInterval(this.nextImage,2000);
  }
  prevImage() {
    this.nextCount--;
    if (this.nextCount < 0) {
      this.nextCount += data["default"].names.length;
    }
    this.imageName = data["default"].names[this.nextCount];
  }

}
