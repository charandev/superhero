import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor( private service: MarvelService) {
 }

ngOnInit(): void {
}

// getStories() {
//   this.service.getStories().subscribe(res=>{
//     console.log(res)
//   })

}

