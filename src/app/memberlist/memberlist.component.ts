import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MemberlistService } from './memberlist.service';


@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'contact', 'edit', 'delete'];

  @ViewChild('memlist') memlist: MatTable<any>;

  constructor(private memberService: MemberlistService) { }

  ngOnInit() {
  }

  getMember() {
    return this.memberService.getMember();
  }

  onDelete(id) {
    this.memberService.deleteMember(id);
    this.memlist.renderRows();
    // console.log(id, this.dataSource);
  }

}
