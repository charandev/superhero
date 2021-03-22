import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor( private service: MarvelService) {

 }

ngOnInit(): void {
}


// getEvents() {
//   this.service.getEvents().subscribe(res=>{
//     console.log(res)
//   })
}
