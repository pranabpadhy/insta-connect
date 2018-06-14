import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MdcDrawer } from '@angular-mdc/web';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('title') title: string;
  isOpen: boolean;
  searchForm: FormGroup;
  constructor() {
    this.isOpen = false;
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.searchForm = new FormGroup({
      searchField: new FormControl(null, Validators.required)
    });
  }
}
