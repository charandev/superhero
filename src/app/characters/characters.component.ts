import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../mservices.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor( private service: MarvelService) {
    
   }

  ngOnInit(): void {
  }

  // getCharacters() {
  //   this.service.getCharacters().subscribe(res=>{
  //     console.log(res)
  //   })
  // }

}
