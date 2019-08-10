import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import mockLib from '../../mock';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'contact', 'edit', 'delete'];
  dataSource = mockLib.flattenMock(mockLib.mock);
  @ViewChild('memlist') memlist: MatTable<any>;

  constructor() { }

  ngOnInit() {
  }

  onDelete(id) {
    this.dataSource.splice(id, 1);
    this.memlist.renderRows();
    // console.log(id, this.dataSource);
  }

}
