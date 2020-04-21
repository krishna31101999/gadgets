import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
mobiles;
  constructor(private data:DataService, private cart:CartService)
  { }

  ngOnInit() {
    this.data.getMobiles().subscribe(d =>{
      this.mobiles=d;
    })
  }

  displaying(idx){
    var sel = this.mobiles[idx]
    this.cart.selected = sel;
  }

}
