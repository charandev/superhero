import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor( private service: MarvelService) {

 }

ngOnInit(): void {
}

// getSeries() {
//   this.service.getSeries().subscribe(res=>{
//     console.log(res)
//   })
}
