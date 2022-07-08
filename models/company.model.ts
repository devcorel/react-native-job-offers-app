import generateId from '../utils/generateId';

export interface ICompany {
   id: string;
   name: string;
   jobOffers: number;
   imageUrl: string;
}

export class Company implements ICompany {
   id;
   name;
   jobOffers;
   imageUrl;

   constructor(name: string, jobOffers: number, imageUrl: string) {
      this.id = generateId();
      this.name = name;
      this.jobOffers = jobOffers;
      this.imageUrl = imageUrl;
   }
}
