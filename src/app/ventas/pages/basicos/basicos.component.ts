import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  nombreLower   : string = 'tomas';
  nombreUpper   : string = 'TOMAS';
  nombreCompleto: string = 'ToMaS FeRnAnDeZ'

  fecha: Date = new Date();
}
