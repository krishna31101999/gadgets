import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
laptops
  constructor(private data:DataService, private cart:CartService) { }

  ngOnInit(){
    this.data.getLaptops().subscribe(d=>{
      this.laptops=d;
    })
  }

  displaying(idx){
    var sel = this.laptops[idx]
    this.cart.selected = sel;
  }

}
