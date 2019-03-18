import { createAction } from 'promise-middleware-redux';
// import { getChirps } from '../services/chirps/getChirps';
import { getChirps } from '../services/mockChirps/getChirps';

export const [
  fetchChirps,
  FETCH_CHIRPS,
  FETCH_CHIRPS_PENDING
] = createAction('FETCH_CHIRPS', getChirps);

