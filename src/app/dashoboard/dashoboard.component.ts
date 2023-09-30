import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service'

@Component({
  selector: 'app-dashoboard',
  templateUrl: './dashoboard.component.html',
  styleUrls: ['./dashoboard.component.css']
})
export class DashoboardComponent {

  lev : number

  constructor() {
    this.lev = DemoServiceService.lev
  }
}
