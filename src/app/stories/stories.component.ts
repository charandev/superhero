import { Component, OnInit } from '@angular/core';
import { MservicesService } from '../mservices.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.sass']
})
export class StoriesComponent implements OnInit {

  constructor( private service: MservicesService) {
 }

ngOnInit(): void {
}

// getStories() {
//   this.service.getStories().subscribe(res=>{
//     console.log(res)
//   })

}

