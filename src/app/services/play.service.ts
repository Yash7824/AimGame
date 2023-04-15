import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  constructor() {}

  clickedTimes: number = 0;
  accuracy: number = 0;
}
