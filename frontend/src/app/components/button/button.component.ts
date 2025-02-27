import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="text-black font-bold w-full px-5 py-2 shadow-md hover:bg-gray-200 rounded-md" (click)="handleButtonClick()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('');  

  // For creating outputs
  btnClicked = output();

  handleButtonClick() {
   this.btnClicked.emit();
  }

}
