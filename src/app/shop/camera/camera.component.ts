import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
camera
  constructor(private data:DataService, private cart:CartService) { }

  ngOnInit(){
    this.data.getCameras().subscribe(d=>{
      this.camera=d;
  })
}

displaying(idx){
  var sel = this.camera[idx]
  this.cart.selected = sel;
}
}
