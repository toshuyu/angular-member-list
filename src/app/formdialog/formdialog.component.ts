import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from '../member-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MemberlistService } from '../memberlist/memberlist.service';

@Component({
  selector: 'app-formdialog',
  templateUrl: './formdialog.component.html',
  styleUrls: ['./formdialog.component.css']
})
export class FormdialogComponent implements OnInit {
  checkoutForm;

  constructor(
    public dialogRef: MatDialogRef<FormdialogComponent>,
    private formBuilder: FormBuilder,
    private memberService: MemberlistService,
    @Inject(MAT_DIALOG_DATA) public data: Member,
  ) {
    this.checkoutForm = this.formBuilder.group(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(value, id) {
    this.memberService.setSingleMember(id, value);
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
