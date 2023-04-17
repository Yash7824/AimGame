import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coordinates } from 'src/app/models/coordinates';
import { PlayService } from 'src/app/services/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent {
  constructor(private route: Router, private playService: PlayService) {}

  coordinates: Coordinates[] = [
    { marginLeft: '10px', marginTop: '10px' },
    { marginLeft: '298px', marginTop: '450px' },
    { marginLeft: '345px', marginTop: '90px' },
    { marginLeft: '463px', marginTop: '82px' },
    { marginLeft: '33px', marginTop: '9px' },
    { marginLeft: '567px', marginTop: '52px' },
    { marginLeft: '78px', marginTop: '90px' },
    { marginLeft: '21px', marginTop: '109px' },
    { marginLeft: '123px', marginTop: '82px' },
    { marginLeft: '90px', marginTop: '178px' },
    { marginLeft: '9px', marginTop: '320px' },
    { marginLeft: '1023px', marginTop: '190px' },
    { marginLeft: '867px', marginTop: '10px' },
    { marginLeft: '934px', marginTop: '90px' },
    { marginLeft: '666px', marginTop: '220px' },
    { marginLeft: '546px', marginTop: '18px' },
    { marginLeft: '345px', marginTop: '123px' },
    { marginLeft: '1067px', marginTop: '210px' },
    { marginLeft: '1120px', marginTop: '434px' },
    { marginLeft: '980px', marginTop: '449px' },
    { marginLeft: '876px', marginTop: '432px' },
    { marginLeft: '632px', marginTop: '21px' },
  ];

  itemTp = this.coordinates[0];

  clickedTimes: number = 0;
  missclicks: number = -1;
  accuracy: number = 1;

  timeLeft: number = 60;
  interval: any;
  stop: boolean = false;

  toggleDisplay: boolean = false;

  startTimer() {
    this.toggleDisplay = true;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft == 0) {
        this.stop = true;
      }
    }, 1000);
  }

  ngDoCheck() {
    this.accuracy = this.clickedTimes / (this.missclicks + this.clickedTimes);
    this.playService.accuracy = this.accuracy;
    this.playService.clickedTimes = this.clickedTimes;
    if (this.stop == true) {
      this.route.navigateByUrl('/');
    }
    this.playService.toggleFilter = this.playService.blur;
  }

  teleport() {
    let randomNum = Math.floor(Math.random() * 22);
    this.itemTp = this.coordinates[randomNum];
    this.clickedTimes += 1;
  }

  missClicks() {
    this.missclicks = this.missclicks + 1;
  }
}
