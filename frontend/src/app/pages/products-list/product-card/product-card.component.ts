import { Component, input, output } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: ` 
  <div class="bg-white shadow-purple-200 border rounded-xl p-6 flex-col gap-6 relative"> 
    <div class="mx-auto">
    <img [src]="product().image" class="w-[200px] h-[300px] object-contain mx-auto">

    <div class="flex flex-col mt-2">
      <span class="text-xl font-bold"> {{ product().title }} </span>
      <span class="text-sm font-sans"> Price: {{ '$' + product().price }} </span>
      <!-- <span class="text-sm font-sans"> Stock: {{ product().stock }} left </span> -->
      <app-primary-button label="Add to Cart" (btnClicked)="addToCart()" class="mt-3" />
    </div>
    </div>

    <div>
      <span class="absolute top-2 right-3 text-l font-bold" 
      [class]="product().stock ? 'text-green-500' : 'text-red-500'">
          @if (product().stock) {
            {{ product().stock }} left
          } @else {
            Out of stock
          }
    </span>
  </div>

  </div>`,
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();

  btnClicked = output();

  addToCart(){
    this.btnClicked.emit();
  }

}
