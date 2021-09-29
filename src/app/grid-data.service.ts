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
        asdf: 'asdf'
      });
    }
    return data;
  }
}
