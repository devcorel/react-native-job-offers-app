import { Job } from '../models/jobs.model';
import { getRandomCompanyId } from './getRandomCompanyId';
import { vacancyNameGenerator } from './vacancyNameGenerator';
import { loremGenerator } from './loremGenerator';
import { salaryGenerator } from './salaryGenerator';
import { getRandomCurrency } from './getRandomCurrency';
import { getRandomVacanciesNumber } from './getRandomVacanciesNumber';
import { getRandomTypeJobs } from './getRandomTypeJobs';
import { getRandomPublishDate } from './getRandomPublishDate';

export const generateJobs = (total: number) => {
   let jobs = [];

   for (let i = 0; i <= total; i++) {
      jobs.push({
         ...new Job(
            getRandomCompanyId(),
            vacancyNameGenerator(),
            loremGenerator(),
            salaryGenerator(),
            getRandomCurrency(),
            getRandomVacanciesNumber(),
            getRandomTypeJobs(),
            getRandomPublishDate()
         ),
         isVisited: randomVisited(),
      });
   }

   return jobs;
};

const randomVisited = () => {
   return Math.floor(Math.random() * 2) > 0 ? true : false;
};
