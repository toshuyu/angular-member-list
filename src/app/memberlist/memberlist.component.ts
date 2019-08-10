import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MemberlistService } from './memberlist.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormdialogComponent } from '../formdialog/formdialog.component';
import { Member } from '../member-model';

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

  getMember() {
    return this.memberService.getMember();
  }

  onDelete(id) {
    this.memberService.deleteMember(id);
    this.memlist.renderRows();
  }

  openDialog(id): void {
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
