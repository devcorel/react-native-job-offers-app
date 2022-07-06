import generateId from '../utils/generateId';

export interface ICompany {
   id: string;
   name: string;
   jobOffers: number;
}

export class Company {
   id = '';
   name = '';
   jobOffers = 0;

   constructor(name: string, jobOffers: number) {
      this.id = generateId();
      this.name = name;
      this.jobOffers = jobOffers;
   }
}
