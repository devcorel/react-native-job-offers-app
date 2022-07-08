import React from 'react';
import { View } from 'react-native';
import { JobList } from '../components/containers/JobList';

import { jobs } from '../mocks/jobs.mock';
import { companies } from '../mocks/companies.mock';

export const JobOffersScreen = () => {
   return (
      <View>
         <JobList jobs={jobs} companies={companies} />
      </View>
   );
};
