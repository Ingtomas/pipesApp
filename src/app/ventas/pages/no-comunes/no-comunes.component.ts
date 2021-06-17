import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Tomas';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = [
    'Maria',
    ' Pedro',
    ' Jose',
    ' Pablo',
    ' Rebecca',
    ' Yuli',
  ];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  //Slice
  cambiarCliente() {
    this.nombre = 'Rebecca';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyvalue
  persona = {
    nombre: 'Tomas',
    edad: 30,
    direccion: 'San Antonio de Los Altos, Los Salias, Miranda, Venezuela',
  };

  //Async
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500 );
  });
}
