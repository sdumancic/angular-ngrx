import { IConfig } from './config.model';

export interface IConfigState {
  config: IConfig | null;
}

export const initialConfigState: IConfigState = {
  config: null,
};
