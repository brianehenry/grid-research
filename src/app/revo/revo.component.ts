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
    this.grid.nativeElement.resize = true;
    this.grid.nativeElement.autoSizeColumn = true;
    this.grid.nativeElement.columns = [{
      prop: 'name',
      name: 'Name',
      sortable: true
    }, {
      prop: 'field1',
      name: 'Field 1',
      sortable: true
    }, {
      prop: 'field2',
      name: 'Field 2',
      size: 300,
      sortable: true
    }, {
      prop: 'field3',
      name: 'Field 3',
      sortable: true
    }, {
      prop: 'groupField1',
      name: 'Area',
      sortable: true
    }, {
      prop: 'groupField2',
      name: 'Section',
      sortable: true
    }, {
      prop: 'dateField',
      name: 'Date',
      columnType: 'date',
      sortable: true,
      autoSize: true,
    }, {
      prop: 'tempField1',
      name: 'Temperature 1',
      sortable: true,
      autoSize: true,
      cellTemplate: (createElement, props) => {
        return createElement('span', {}, this.formatTemperature1(props.model[props.prop]))
      }
    }, {
      prop: 'tempField2',
      name: 'Temperature 2',
      sortable: true,
      autoSize: true,
      cellTemplate: (createElement, props) => {
        return createElement('span', {}, this.formatTemperature2(props.model[props.prop]))
      }
    }, {
      prop: 'booleanField1',
      name: 'Status',
      sortable: true,
      autoSize: true,
      cellTemplate: (createElement, props) => {
        return createElement('span', {}, this.formatTemperature2(props.model[props.prop]))
      }
    }];
    this.grid.nativeElement.source = this.gridDataService.getData();
    this.grid.nativeElement.grouping = {
      props: ['groupField1', 'groupField2']
    };
  }

  private formatTemperature1(temp: number): string {
    let tempString = `${temp.toFixed(1)} °C`;
    return tempString.replace(/\.?0+$/, '');
  }

  private formatTemperature2(temp: number): string {
    return `${temp} degrees Celcius`;
  }

}
