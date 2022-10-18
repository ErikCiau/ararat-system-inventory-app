import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [],
})
export class TableComponent {
  @Input()
  public titles: string[] = ['Hola', 'mundo'];
}
