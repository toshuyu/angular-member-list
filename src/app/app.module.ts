import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { DemoMaterialModule } from './../material-module';

@NgModule({
  declarations: [
    AppComponent,
    MemberlistComponent,
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
