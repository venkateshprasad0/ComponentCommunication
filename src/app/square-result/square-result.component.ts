import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square-result',
  templateUrl: './square-result.component.html',
  styleUrls: ['./square-result.component.css']
})
export class SquareResultComponent implements OnInit {
  @Input() msgFromParent1: string='';
  numberSquared:number=0;
  extractNumber:number=0;
  constructor() { }

  @Output() newItemEvent = new EventEmitter<number>();
  ngOnInit(): void {
  }

  calculate(){
  this.extractNumber = parseInt(this.msgFromParent1);
  this.numberSquared = this.extractNumber*this.extractNumber;
  console.log(this.extractNumber);
  }

  addNewItem() {
    this.newItemEvent.emit(this.numberSquared);
    window.alert("Number is saved");
  }
}
