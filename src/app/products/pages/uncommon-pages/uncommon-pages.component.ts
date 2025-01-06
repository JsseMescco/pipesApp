import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {

  // i18nSelect
  public name: string = 'Josse';
  public gender: 'male' | 'female' = 'male';


  public invitationMap = {
    'male': 'Invitarlo',
    'female': 'Invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female'
  }

  // i18nPlural
  public clients: string[] = ['Josse', 'Melissa', 'Juan', 'Pedro', 'Maria'];
  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //jsonPipe
  person = {
    name: 'Josse',
    age: 35,
    address: 'Calle 123'
  }

  //asyncPipe
  public myObservableTimer = interval(2000);
  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos datos en la promsea ');
    }, 3500);
  })

}
