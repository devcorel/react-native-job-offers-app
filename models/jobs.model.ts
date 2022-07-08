import generateId from '../utils/generateId';

export type TJobType = 'Remote' | 'Mix' | 'Face-to-face';

export interface IJob {
   id: string;
   companyId: string;
   name: string;
   description: string;
   salary: number;
   currency: string;
   vacancies: number;
   type: TJobType;
   publishDate: number;
   // esquema: freelance: nominal, honorarios, temporal
}

export class Job implements IJob {
   id;
   companyId;
   name;
   description;
   salary;
   currency;
   vacancies;
   type;
   publishDate;

   constructor(
      companyId: string,
      name: string,
      description: string,
      salary: number,
      currency: string,
      vacancies: number,
      type: TJobType,
      publishDate: number
   ) {
      this.id = generateId();
      this.companyId = companyId;
      this.name = name;
      this.description = description;
      this.salary = salary;
      this.currency = currency;
      this.vacancies = vacancies;
      this.type = type;
      this.publishDate = publishDate;
   }
}
