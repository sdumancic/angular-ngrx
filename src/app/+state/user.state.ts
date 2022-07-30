import { IUser } from './user.model';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser | null;
}

export const initialUserState: IUserState = {
  users: [],
  selectedUser: null,
};
