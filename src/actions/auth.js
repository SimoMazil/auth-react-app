import { USER_LOGGED_IN } from '../types';
import api from '../api';
import { dispatch } from 'rxjs/internal/observable/range';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
})

export const login = credentials => () => api.user.login(credentials).then(user => dispatch(userLoggedIn(user)))