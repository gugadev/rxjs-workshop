import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-workshop';
  topics: { path: string, title: string }[] = [];

  ngOnInit(): void {
    this.topics = [
      { title: 'Observable', path: '/observable' },
      { title: 'Subscription', path: '/subscription' },
      { title: 'Subject', path: '/subject' },
      { title: 'Cold and Heat Ob.', path: '/cold-heat-observable' },
      { title: 'Of', path: '/of' },
      { title: 'fromEvent', path: '/from-event' },
      { title: 'range', path: '/range' },
      { title: 'timer', path: '/timer' }
    ];
  }
}
