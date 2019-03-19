import { createAction } from 'promise-middleware-redux';
import { getChirps } from '../services/chirps';

export const [
  fetchChirps,
  FETCH_CHIRPS,
  FETCH_CHIRPS_PENDING,
  FETCH_CHIRPS_FULFILLED,
  FETCH_CHIRPS_REJECTED
] = createAction('FETCH_CHIRPS', getChirps);
