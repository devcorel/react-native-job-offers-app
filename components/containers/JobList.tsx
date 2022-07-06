import React, { useCallback, useMemo } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';
import { jobs } from '../../mocks/jobs.mock';
import { companies } from '../../mocks/companies.mock';

const styles = StyleSheet.create({
   container: {
      marginTop: 22,
   },
   itemContainer: {
      flex: 1,
      flexDirection: 'column',
      // padding: 5,
      paddingVertical: 8,
      paddingHorizontal: 6,
      // borderBottomColor: '#ddd',
      // borderBottomWidth: 1,
      position: 'relative',
      backgroundColor: '#FEE9D5',
      borderWidth: 1,
      borderColor: '#FECDAB',
      borderRadius: 15,
      marginVertical: 5,
      marginHorizontal: 5,
   },
   headContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 5,
   },
   companyNameText: {
      color: '#046B99',
      fontWeight: 'bold',
   },
   dateText: {
      fontSize: 12,
      color: '#046B99',
      paddingRight: 3,
   },
   titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   tagNew: {
      backgroundColor: '#FF2424',
      color: '#FFF',
      fontSize: 10,
      fontWeight: 'bold',
      letterSpacing: 1,
      paddingVertical: 3,
      paddingHorizontal: 4,
      marginLeft: 6,
      borderRadius: 3,
   },
   titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#222',
   },
   infoContainer: {
      flexDirection: 'row',
      paddingBottom: 8,
   },
   infoText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#AF6D01',
   },
   infoData: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#AF6D01',
   },
   descriptionText: {
      flex: 1,
      fontSize: 16,
      color: '#1C304A',
      marginBottom: 15,
   },
   bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   actionButtonsContainer: {
      flexDirection: 'row',
   },
   buttonSeparator: {
      width: 8,
   },
   visitedText: {
      fontSize: 16,
      fontStyle: 'italic',
      color: '#A3A3A3',
      paddingRight: 3,
   },
});

/**
 * 
 *    companyId: string;
   name: string;
   description: string;
   salary: number;
   currency: string;
   vacancies: number;
   type: 'remote' | 'mix' | 'presence';
 * 
 */
export const JobList = () => {
   return (
      <View style={styles.container}>
         <FlatList
            data={jobs}
            renderItem={({ item: job }) => (
               <View style={styles.itemContainer}>
                  <View style={styles.headContainer}>
                     <Text style={styles.companyNameText}>
                        {getNameCompany(job.companyId)}
                     </Text>
                     <Text style={styles.dateText}>
                        {formatDate(job.publishDate)}
                     </Text>
                  </View>
                  <View style={styles.titleContainer}>
                     <Text style={styles.titleText}>{job.name}</Text>
                     {isPublishToday(job.publishDate) && (
                        <Text style={styles.tagNew}>NEW!</Text>
                     )}
                  </View>
                  <View style={styles.infoContainer}>
                     <Text style={styles.infoData}>${job.salary} </Text>
                     <Text style={styles.infoData}>{job.currency}</Text>

                     <Text style={styles.infoText}> | </Text>
                     <Text style={styles.infoData}>{job.type}</Text>

                     <Text style={styles.infoText}> | Vacancies: </Text>
                     <Text style={styles.infoData}>{job.vacancies}</Text>
                  </View>
                  <Text style={styles.descriptionText} numberOfLines={2}>
                     {job.description}
                  </Text>
                  <View style={styles.bottomContainer}>
                     <View style={styles.actionButtonsContainer}>
                        <Button
                           title="Apply Now!"
                           color="#FC552F"
                           onPress={() => alert('You applied!')}
                        />
                        <ButtonSeparator />
                        <Button
                           title="MORE INFO"
                           color="#FD8A62"
                           onPress={() => alert('More more')}
                        />
                     </View>
                     <Text style={styles.visitedText}>
                        {job.isVisited ? 'visited' : ''}
                     </Text>
                  </View>
               </View>
            )}
         />
      </View>
   );
};

const ButtonSeparator = () => <View style={styles.buttonSeparator} />;

const formatDate = (date: number): string => {
   let newDate = new Date();
   newDate.setTime(date);
   // return newDate.toLocaleDateString();
   return format(newDate, 'dd/MM/yyyy');
};

const isPublishToday = (date: number): boolean => {
   let jobDate = new Date();
   jobDate.setTime(date);
   let todayDate = new Date();
   return format(jobDate, 'dd/MM/yyyy') === format(todayDate, 'dd/MM/yyyy')
      ? true
      : false;
};

const getNameCompany = (id: string) => {
   let company = companies.filter((c) => c.id === id)[0];
   return company.name;
};
