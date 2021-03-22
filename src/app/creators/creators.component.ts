import { Component, OnInit } from '@angular/core';
import { MservicesService } from '../mservices.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.sass']
})
export class CreatorsComponent implements OnInit {

  constructor( private service: MservicesService) {
 }


  ngOnInit(): void {
  }

  // getCreators() {
  //   this.service.getCreators().subscribe(res=>{
  //     console.log(res)
  //   })
  // }
  
}
