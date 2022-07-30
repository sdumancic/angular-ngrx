import { ConfigActions, EConfigActions } from './config.action';
import { IConfigState, initialConfigState } from './config.state';

export const configReducers = (
  state = initialConfigState,
  action: ConfigActions
): IConfigState => {
  switch (action.type) {
    case EConfigActions.GetConfigSuccess: {
      return {
        ...state,
        config: action.payload,
      };
    }

    default:
      return state;
  }
};
