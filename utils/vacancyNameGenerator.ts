import { getRandomIndex } from './getRandomIndex';

export const vacancyNameGenerator = () => {
   const aux_tech = [
      'PHP',
      'Javascript',
      'Frontend',
      'Backend',
      'NodeJs',
      'Fullstack',
      'Angular',
      'Csharp',
      'SQL',
      'Ruby on Rails',
      'GO',
   ];
   const aux_prof = ['Developer', 'Analist', 'Tester', 'Designer', 'Modeler'];
   const aux_lvl = ['Jr.', 'Senior'];

   return `${aux_tech[getRandomIndex(aux_tech.length)]} ${
      aux_prof[getRandomIndex(aux_prof.length)]
   } ${aux_lvl[getRandomIndex(aux_lvl.length)]}`;
};
