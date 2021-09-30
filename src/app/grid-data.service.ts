import { Injectable } from '@angular/core';
import { RowModel } from './row-model';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {
  public numRows: number = 100;

  constructor() { }

  public getData(): RowModel[] {
    const data: RowModel[] = []
    for (let i = 0; i < this.numRows; i++) {
      data.push({
        name: `System ${i}`,
        field1: `asdf ${i}`,
        field2: `asdfasdfasdfasdfasdfasdfasdfasdf ${i}`,
        field3: `asdf ${i}`,
        groupField1: `Area ${(i % 3) + 1}`,
        groupField2: `Section ${(i % 5) + 1}`,
        dateField: new Date(Date.now() - Math.floor(Math.random() * 1000000000)),
        tempField1: 80 - Math.random() * 50,
        tempField2: 80 - Math.random() * 50,
        booleanField1: Math.random() > .5,
        booleanField2: Math.random() > .5,
        enumField: Math.floor(Math.random() * 3)
      });
    }
    return data;
  }
}
