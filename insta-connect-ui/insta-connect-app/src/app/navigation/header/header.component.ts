import { Component, OnInit, Input } from '@angular/core';
import { MdcDrawer } from '@angular-mdc/web';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('title') title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
