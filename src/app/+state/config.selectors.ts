import { createSelector } from '@ngrx/store';
import { IAppState } from './app.state';
import { IConfigState } from './config.state';

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
  configState,
  (state: IConfigState) => state.config
);
