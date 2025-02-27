import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 text-white font-bold w-full border px-5 py-2 shadow-md hover:opacity-80 rounded-md" (click)="handleButtonClick()">
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  // For creating inputs
  label = input('');  

  // For creating outputs
  btnClicked = output();

  handleButtonClick() {
   this.btnClicked.emit();
  }
}
