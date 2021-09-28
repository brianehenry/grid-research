import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Components as RevoGridComponents } from '@revolist/revogrid/dist/types/components';
import { GridDataService } from '../grid-data.service';

@Component({
  selector: 'app-revo',
  templateUrl: './revo.component.html',
  styleUrls: ['./revo.component.scss']
})
export class RevoComponent implements AfterViewInit {
  @ViewChild('grid', { static: true }) private grid: ElementRef<RevoGridComponents.RevoGrid>;

  constructor(private gridDataService: GridDataService) { }

  ngAfterViewInit(): void {
    this.grid.nativeElement.columns = [{
      prop: 'name',
      name: 'Name'
    }, {
      prop: 'asdf',
      name: 'Asdf'
    }];
    this.grid.nativeElement.source = this.gridDataService.getData();
  }

}
