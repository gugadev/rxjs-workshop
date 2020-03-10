import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  runExample(): void {
    alert('Let\'s run this code!');
  }

  seeExampleCode(): void {
    // TODO implement see example code in modal feature
  }

  ngOnInit(): void {
  }

}
