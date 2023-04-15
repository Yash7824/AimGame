import { Component } from '@angular/core';
import { PlayService } from 'src/app/services/play.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private playService: PlayService) {}

  clickedTimes: number = this.playService.clickedTimes;
  accuracy: number = this.playService.accuracy;

  cardsArray = [
    {
      imageUrl:
        'https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg',
      name: 'Valorant',
    },
    {
      imageUrl:
        'https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427',
      name: 'Counter Strike Go',
    },
    {
      imageUrl: 'https://i.ytimg.com/vi/GKXS_YA9s7E/maxresdefault.jpg',
      name: 'Overwatch 2',
    },
    {
      imageUrl:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/capsule_616x353.jpg?t=1679430743',
      name: 'Halo Infinite',
    },
    {
      imageUrl:
        'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ2-S01-DMZ-TACTICS-TOUT.jpg',
      name: 'Warzone 2.0',
    },
    {
      imageUrl: 'https://i.ytimg.com/vi/vi-bdUd9J3E/maxresdefault.jpg',
      name: 'Quake 2021',
    },
    {
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/F95LHZpNYpnhuKvLTg9MAQ.jpg',
      name: 'Black Mesa',
    },
    {
      imageUrl:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/782330/capsule_616x353.jpg?t=1661971606',
      name: 'Doom Eternal',
    },
  ];
}
