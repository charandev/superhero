import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-card',
  templateUrl: './general-card.component.html',
  styleUrls: ['./general-card.component.scss']
})
export class GeneralCardComponent implements OnInit {

  constructor() { }

  @Input() data;
 




  ngOnInit(): void {
    console.log(this.data);
    
  }

  

}
