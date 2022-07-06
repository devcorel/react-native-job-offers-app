import generateId from '../utils/generateId';

interface IJob {
   id: string;
   companyId: string;
   name: string;
   description: string;
   salary: number;
   currency: string;
   vacancies: number;
   type: 'Remote' | 'Mix' | 'Face-to-face';
   publishDate: number;
   // esquema: freelance: nominal, honorarios, temporal
}

export class Job {
   id = '';
   companyId = '';
   name = '';
   description = '';
   salary = 0;
   currency = '';
   vacancies = 0;
   type = 'remote';
   publishDate = 0;

   constructor(
      companyId: string,
      name: string,
      description: string,
      salary: number,
      currency: string,
      vacancies: number,
      type: string,
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
