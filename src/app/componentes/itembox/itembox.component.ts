import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itembox',
  templateUrl: './itembox.component.html',
  styleUrls: ['./itembox.component.css']
})
export class ItemboxComponent implements OnInit {

  @Input() config: any = {};


  constructor() { 
  }

  ngOnInit(): void {
  }

}
