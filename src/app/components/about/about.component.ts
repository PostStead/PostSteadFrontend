import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  titleText: string = "Hello There!";
  image: string = 'https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  changeText(phase: number) {
    switch (phase) {
      case 1: {
        this.titleText = "General Kenobi!";
        this.image = 'https://i.kym-cdn.com/entries/icons/original/000/022/045/grievous-meets-anakin_f17a5f58.jpeg';
        break;
      }
      case 2: {
        this.titleText = "Hello There!";
        this.image = 'https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg';
        break;
      }
      default: {
        this.titleText = "Hello There!";
        this.image = 'https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg';
        break;
      }
    }
  }

}
