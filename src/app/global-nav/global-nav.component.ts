import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';
import {GlobalNavService} from './global-nav.service';

@Component({
  selector: 'app-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GlobalNavComponent implements OnInit {

  public menu: any = [];

  @Input()
  public url: string;

  constructor(private _globalNavService: GlobalNavService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getMenus(this.url);
  }

  getMenus(url) {
    this._globalNavService.getMenus(url).subscribe(
      data => {
        this.menu = data;
        this.cdr.detectChanges();
        console.log(this.menu);
      },
      err => console.error(err)
    );
  }

}
