import { Directive, HostBinding, ElementRef, Renderer2, OnInit } from '@angular/core';
import { MdcTextField } from '@angular-mdc/web';

@Directive({
  selector: '[appShowHidePassword]'
})

export class ShowHidePasswordDirective implements OnInit {

  constructor(
    public textfield: ElementRef,
    public render: Renderer2
  ) {}

  ngOnInit() {
    this.render.setProperty(this.textfield.nativeElement.firstChild, 'type', 'password');
  }

  changeType(type: string): void {
    this.render.setProperty(this.textfield.nativeElement.firstChild, 'type', type);
    if (type === 'password') {
      this.textfield.nativeElement.children[1].innerHTML = 'visibility';
    } else {
      this.textfield.nativeElement.children[1].innerHTML = 'visibility_off';
    }
  }

}
