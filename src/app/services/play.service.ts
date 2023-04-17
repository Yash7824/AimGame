import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  constructor() {}

  clickedTimes: number = 0;
  accuracy: number = 0;

  blur = {
    filter: 'blur(10px)',
  };

  notBlur = {
    filter: 'blur(0px)',
  };

  toggleFilter = this.notBlur;
}
