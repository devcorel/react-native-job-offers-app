import { companies } from '../mocks/companies.mock';
import { getRandomIndex } from './getRandomIndex';

export const getRandomCompanyId = () => {
   return companies[getRandomIndex(companies.length)].id;
};
