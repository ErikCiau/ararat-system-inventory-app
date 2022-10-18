import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class DrawerService {
  public controller: EventEmitter<void> = new EventEmitter();
}
