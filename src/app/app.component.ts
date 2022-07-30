import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from './+state/app.state';
import { GetConfig } from './+state/config.action';
import { selectConfig } from './+state/config.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ngrx';
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}
