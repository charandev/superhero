import { Component, OnInit } from '@angular/core';
import { MservicesService } from '../mservices.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.sass']
})
export class ComicsComponent implements OnInit {

  constructor( private service: MservicesService) {
  
 }

ngOnInit(): void {
}

// getComics() {
//   this.service.getComics().subscribe(res=>{
//     console.log(res)
//   })
}
