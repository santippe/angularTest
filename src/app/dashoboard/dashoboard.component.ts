import { Component } from '@angular/core';
//static
import { DemoServiceService } from '../demo-service.service'
import { DBServiceService } from '../DBService/dbservice.service';

@Component({
  selector: 'app-dashoboard',
  templateUrl: './dashoboard.component.html',
  styleUrls: ['./dashoboard.component.css']
})
export class DashoboardComponent {

  lev: number
  dbService: DBServiceService
  data: any[]
  elem : any = null

  constructor(dbservice: DBServiceService) {
    this.lev = DemoServiceService.lev
    this.dbService = dbservice
    this.data = dbservice.readData()
  }

  saveItem() {
    this.dbService.insertData(this.elem)
    this.data = this.dbService.readData()
  }

  deleteItem(index : number){
    this.dbService.deleteData(index)
    this.data = this.dbService.readData()
  }
}
