import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
tvs
  constructor(private data:DataService, private cart:CartService) { }

  ngOnInit() {
    this.data.getTvs().subscribe(d =>{
      this.tvs=d;
    })
  }
  displaying(idx){
    var sel = this.tvs[idx]
    this.cart.selected = sel;
  }
}
