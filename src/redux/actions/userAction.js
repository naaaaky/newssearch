export const USER_FETCH = 'USER/FETCH';

export const fetchUser = id => ({
  type: USER_FETCH,
  payload: id,
});
