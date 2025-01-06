import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Color, Hero} from "../../interfaces/hero.interfaces";

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'

})
export class OrderComponent {
  isUpperCase: boolean = true;
  orderBy?: keyof Hero;
  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color : Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color : Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color : Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color : Color.green
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }


}
