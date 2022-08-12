import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-c',
  templateUrl: './first-c.component.html',
  styleUrls: ['./first-c.component.scss']
})
export class FirstCComponent implements OnInit {

  messageOnInit: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.messageOnInit = 'Hello from Init!'
  }
}
