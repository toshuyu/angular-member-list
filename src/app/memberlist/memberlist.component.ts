import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MemberlistService } from './memberlist.service';
import { MatDialog } from '@angular/material/dialog';
import { FormdialogComponent } from '../formdialog/formdialog.component';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'contact', 'edit', 'delete'];

  @ViewChild('memlist') memlist: MatTable<any>;

  constructor(
    private memberService: MemberlistService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  getMembers() {
    return this.memberService.getMembers();
  }

  onDelete(id) {
    this.memberService.deleteMember(id);
    this.memlist.renderRows();
  }

  onEdit(id): void {
    const dialogRef = this.dialog.open(FormdialogComponent, {
      width: '400px',
      data: {...this.memberService.getSingleMember(id),
        contact: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.memlist.renderRows();
    });
  }

  onCreate() {
    const dialogRef = this.dialog.open(FormdialogComponent, {
      width: '400px',
      data: {...this.memberService.getSingleMember(-1),
      contact: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.memlist.renderRows();
    });
  }
}
