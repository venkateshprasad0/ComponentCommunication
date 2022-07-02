import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentMsgToChild1:string = '';

  dataArray:number[]=[];

  addItem(newItem: number) {
    this.dataArray.push(newItem);
  }

}
