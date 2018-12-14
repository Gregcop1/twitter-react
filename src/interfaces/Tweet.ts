import {User} from './User';
import {Share} from './Share';

export interface Tweet {
  author: User;
  date: number;
  image?: string|null;
  message: string;
  shares: Share;
}
