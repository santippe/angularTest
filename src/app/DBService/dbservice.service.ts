import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBServiceService {

  public data : any[]
  private storageKey : string = "myApp"

  constructor() {
    // Initialize with any existing data in localStorage
    const storedData = localStorage.getItem(this.storageKey);
    if (storedData) {
      this.data = JSON.parse(storedData);
    } else {
      this.data = [];
    }
  }

  // Read method to get all data
  readData(): any[] {
    return this.data;
  }

  // Insert method to add a new item
  insertData(newItem: any): void {
    this.data.push(newItem);
    this.saveDataToLocalStorage();
  }

  // Delete method to remove an item by ID
  deleteData(index: number): void {
    //const index = this.data.findIndex(item => item.id === id);
    //if (index !== -1) {
      this.data.splice(index, 1);
      this.saveDataToLocalStorage();
    //}
  }

  // Save data to localStorage
  private saveDataToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }
}
