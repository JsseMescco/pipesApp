import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {
  public nameLower: string = 'josse';
  public nameUpper: string = 'JOSSE';
  public nameFull: string = 'Josse MesCcO';


  customDate = new Date(); // 2021-09-07T17:00:00.000Z
}
