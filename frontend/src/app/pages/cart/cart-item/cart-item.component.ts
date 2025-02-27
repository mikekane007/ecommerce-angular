import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
   <div class="bg-white shadow-md border rounded-xl p-6 flex-col gap-4 items-center"
   > <img [src]="item().image" class="w-[50px] h-[50px] object-contain">
   <div class="flex flex-col mt-3">
     <span class="text-xl font-bold"> {{ item().title }} </span>
     <span class="text-sm font-sans"> Price: {{ '$' + item().price }} </span>
   </div>
   <div class="flex-1"><app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)"/></div>
   
   </div>
  `,
  styles: ``
})
export class CartItemComponent {
  item = input.required<Product>();

  cartService = inject(CartService);
}
