import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  @Input() config: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
