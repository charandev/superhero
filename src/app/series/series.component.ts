import { Component, OnInit } from '@angular/core';
import { MservicesService } from '../mservices.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.sass']
})
export class SeriesComponent implements OnInit {

  constructor( private service: MservicesService) {

 }

ngOnInit(): void {
}

// getSeries() {
//   this.service.getSeries().subscribe(res=>{
//     console.log(res)
//   })
}
