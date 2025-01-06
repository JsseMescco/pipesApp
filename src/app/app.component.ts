import { Component, inject, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private primengConfig = inject(PrimeNGConfig);

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  title = 'jSsse MessCO';
}
