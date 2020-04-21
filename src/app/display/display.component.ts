import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
dis
  constructor(private cart:CartService,private data:DataService) { }

  ngOnInit(){
  this.dis=this.cart.selected;
  }

}
