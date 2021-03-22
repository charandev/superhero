import { Component, OnInit } from '@angular/core';
import { MservicesService } from '../mservices.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {

  constructor( private service: MservicesService) {

 }

ngOnInit(): void {
}


// getEvents() {
//   this.service.getEvents().subscribe(res=>{
//     console.log(res)
//   })
}
