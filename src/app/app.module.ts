import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {DragDropModule} from '@angular/cdk/drag-drop';


import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { RenderComponent } from './components/parent/render/render.component';
import { ListComponent } from './components/parent/list/list.component';
import { HeaderComponent } from './components/parent/genericComponents/header/header.component';
import { ButtonComponent } from './components/parent/genericComponents/button/button.component';
import { TextboxComponent } from './components/parent/genericComponents/textbox/textbox.component';
import { SpinnerComponent } from './components/parent/genericComponents/spinner/spinner.component';
import { TableComponent } from './components/parent/genericComponents/table/table.component';
import { FooterComponent } from './components/parent/genericComponents/footer/footer.component';
import { MaskComponent } from './components/parent/genericComponents/mask/mask.component';
import { DividerComponent } from './components/parent/genericComponents/divider/divider.component';
import { DropdownComponent } from './components/parent/genericComponents/dropdown/dropdown.component';
import { TimeComponent } from './components/parent/genericComponents/time/time.component';
import { UsersComponent } from './components/users/users.component';
import { WellListComponent } from './components/well-list/well-list.component';
import { WellComponent } from './components/well-list/well/well.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    RenderComponent,
    ListComponent,
    HeaderComponent,
    ButtonComponent,
    TextboxComponent,
    SpinnerComponent,
    TableComponent,
    FooterComponent,
    MaskComponent,
    DividerComponent,
    DropdownComponent,
    TimeComponent,
    UsersComponent,
    WellListComponent,
    WellComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    MatSliderModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
