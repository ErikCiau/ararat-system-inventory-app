export class DrawerIcon {
  public path: string;
  public name: string;
  public icon: string;
  constructor(path: string, name: string, icon: string, type = 'svg') {
    this.path = path;
    this.name = name;
    this.icon = `/assets/${icon}.${type}`;
  }
}
