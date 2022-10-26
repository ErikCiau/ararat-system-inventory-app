import { Component, OnInit } from '@angular/core';
import { DrawerIcon as DrawerSideIcon } from './drawer-icon';
import { DrawerService } from './drawer.service';

@Component({
  templateUrl: './drawer.component.html',
  styles: [],
  selector: 'app-drawer',
})
export class DrawerComponent implements OnInit {
  public isActive: boolean = false;
  public routerPages: DrawerSideIcon[] = [
    new DrawerSideIcon('/', 'Dashboard', 'graph-up'),
    new DrawerSideIcon('/products', 'Productos', 'task-list'),
    new DrawerSideIcon('/suppliers', 'Proveedores', 'providers'),
    new DrawerSideIcon('/employees', 'Empleados', 'employees'),
    new DrawerSideIcon('/', 'Pedidos', 'orders'),
    new DrawerSideIcon('/', 'Clientes', 'clients'),
  ];

  constructor(private drawerService: DrawerService) {}

  ngOnInit(): void {
    this.drawerService.controller.subscribe(() => {
      console.log('Emitido');
      this.isActive = !this.isActive;
    });
  }

  toggle() {
    console.log('diste click');
    this.drawerService.controller.emit();
  }
}
