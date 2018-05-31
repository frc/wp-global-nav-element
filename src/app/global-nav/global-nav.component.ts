import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {GlobalNavService} from './global-nav.service';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GlobalNavComponent implements OnInit {

  public menus;

  @Input()
  public url: string;

  constructor(private _globalNavService: GlobalNavService) { 
  }

  ngOnInit() {
    this.getMenus(this.url);
  }

  getMenus(url) {
    this._globalNavService.getMenus(url).subscribe(
      data => {this.menus = data},
      err => console.error(err),
      () => console.log(this.menus),
    );
  }

}
