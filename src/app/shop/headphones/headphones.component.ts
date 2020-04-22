import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent implements OnInit {
headphones
  constructor(private data:DataService, private cart:CartService) { }

  ngOnInit() {
    this.data.getHeadphones().subscribe(d=>{
      this.headphones=d;
  })
}
  displaying(idx){
    var sel = this.headphones[idx]
    this.cart.selected = sel;
  }

}
