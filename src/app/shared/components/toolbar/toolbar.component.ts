import { Component } from '@angular/core';
import { DrawerService } from '../drawer/drawer.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [],
})
export class ToolbarComponent {
  constructor(private drawerService: DrawerService) {}

  public handleToggle() {
    this.drawerService.controller.emit();
  }
}
