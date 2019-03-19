import { get, post } from './request';

export const createChirp = chirp => post('chirps', chirp);
export const getChirps = () => get('chirps');
