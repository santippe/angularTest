import { Component } from '@angular/core';
import { DBServiceService } from 'src/app/DBService/dbservice.service';
import { DemoServiceService } from 'src/app/demo-service.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent {
  lev: number
  dbService: DBServiceService
  data: any[]
  elem: any = null

  constructor(dbservice: DBServiceService) {
    this.lev = DemoServiceService.lev
    this.dbService = dbservice
    this.data = dbservice.readData()
  }

  saveItem(setValue: boolean) {
    this.dbService.insertData(this.elem)
    this.data = this.dbService.readData()
    this.elem = null
  }

  deleteItem(index: number) {
    this.dbService.deleteData(index)
    this.data = this.dbService.readData()
  }
}
