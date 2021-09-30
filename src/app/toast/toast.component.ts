import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Grid from 'tui-grid';
import { TuiGridEvent } from 'tui-grid/types/event';
import { OptRow } from 'tui-grid/types/options';
import { GridDataService } from '../grid-data.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements AfterViewInit {
  @ViewChild('grid', { static: true }) private gridEl: ElementRef;

  constructor(private gridDataService: GridDataService) { }

  ngAfterViewInit(): void {
    const grid = new Grid({
      el: this.gridEl.nativeElement,
      columns: [{
        header: 'Name',
        name: 'name'
      }],
      data: this.gridDataService.getData() as any as OptRow[]
    });
  }

}
