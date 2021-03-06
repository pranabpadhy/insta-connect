import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appShowHidePassword]'
})

export class ShowHidePasswordDirective implements OnInit {
  ShowPassword: boolean;
  constructor(
    private textfield: ElementRef,
    private render: Renderer2
  ) {
    this.ShowPassword = false;
  }

  ngOnInit() {
    this.render.setProperty(this.textfield.nativeElement.firstChild, 'type', 'password');
    this.render.listen(this.textfield.nativeElement.children[1], 'click', event => this.eventHandler(event));
  }

  eventHandler(event: any): any {
    this.ShowPassword = !this.ShowPassword;
    if (!this.ShowPassword) {
      this.render.setProperty(this.textfield.nativeElement.firstChild, 'type', 'password');
      this.render.setProperty(this.textfield.nativeElement.children[1], 'innerHTML', 'visibility');
    } else {
      this.render.setProperty(this.textfield.nativeElement.firstChild, 'type', 'text');
      this.render.setProperty(this.textfield.nativeElement.children[1], 'innerHTML', 'visibility_off');
    }
  }

}
