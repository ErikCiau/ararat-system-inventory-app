import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DrawerService } from './components/drawer/drawer.service';

import { TableComponent } from './components/table/table.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    DrawerComponent,
    ToolbarComponent,
    TableComponent,
  ],
  providers: [DrawerService],
  exports: [
    DrawerComponent, ToolbarComponent, TableComponent,
  ],
})
export class SharedModule { }
