import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { DemoMaterialModule } from './../material-module';
import { FormdialogComponent } from './formdialog/formdialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MemberlistComponent,
    FormdialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  entryComponents: [FormdialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
