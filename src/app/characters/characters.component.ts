import { Component, OnInit } from '@angular/core';
import { MservicesService } from '../mservices.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  constructor( private service: MservicesService) {
    
   }

  ngOnInit(): void {
  }

  // getCharacters() {
  //   this.service.getCharacters().subscribe(res=>{
  //     console.log(res)
  //   })
  // }

}
