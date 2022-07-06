import { getRandomIndex } from './getRandomIndex';
export const getRandomTypeJobs = () => {
   const typeJobs = ['Remote', 'Mix', 'Face-to-face'];
   return typeJobs[getRandomIndex(typeJobs.length)];
};
