import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { DataService } from '../../data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
dis
  constructor(private cart:CartService,private data:DataService, private snackBar:MatSnackBar) { }

  ngOnInit(){
  this.dis=this.cart.selected;
  }

  addItem(idx){
   
    var cart = this.dis
    this.cart.cartItems.push(cart);
console.log("Added to cart")

  }
 

  
 

}
