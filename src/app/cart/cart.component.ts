import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems
  constructor(private cart:CartService, private data:DataService) { }

  ngOnInit() {
    this.cartItems=this.cart.cartItems;

  }

  removeItem(idx)
  {
   this.cart.cartItems.splice(idx,1);
  }
}
