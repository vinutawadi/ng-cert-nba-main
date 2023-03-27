import { Component, EventEmitter, Input, Output } from '@angular/core';
import *as constant from '../constant'

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  public buttonText = '';
  readonly constant = constant;


	@Input()
	set text(name: string) {
		this.buttonText = name.toUpperCase();
	}
	get name(): string {
		return this.buttonText;
	}
	@Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;

	constructor() {}

	onClick(data: string) {
		this.btnClick.emit(data);
	}
}