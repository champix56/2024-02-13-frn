export interface IUser {
  id?: number;
  name: string;
  firstName: string;
  photo?: string;
}
export const DUMMY_USER: IUser = {name: '', firstName: ''};
