import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
  <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of product(); track product.id) {
      <app-product-card [product]="product"/>
    }
  </div>
 
  `,
  styles: ``
})
export class ProductsListComponent {
  product = signal<Product[]>([
      {
        id: 1,
        title: "White v neck shirt on brown clothes hanger",
        price: 100,
        image: "https://picsum.photos/id/54/200/300",
        stock: 12
      },
      {
        id: 2,
        title: "Red jacket hanging on a clothes line",
        price: 200,
        image: "https://picsum.photos/id/100/200/300",
        stock: 0
      },
      {
        id: 3,
        title: "Jacket For sale on a coat hanger",
        price: 300,
        image: "https://picsum.photos/id/47/200/300",
        stock: 30
      },
      {
        id: 4,
        title: "Sweater and Shirt",
        price: 300,
        image: "https://picsum.photos/id/21/200/300",
        stock: 30
      }                 

  ]);

}
