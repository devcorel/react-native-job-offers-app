import React, { FC, useEffect, useMemo, useState } from 'react';
import {
   Button,
   FlatList,
   Image,
   ImageSourcePropType,
   StyleSheet,
   Text,
   TouchableHighlight,
   View,
} from 'react-native';
import { format } from 'date-fns';

import { IJob } from '../../models/jobs.model';
import { ICompany } from '../../models/company.model';

interface IJobUser extends IJob {
   isVisited: boolean;
   companyName?: string;
   companyImageUrl?: string;
   companyImageDynamicHeight?: number;
}

interface JobListProps {
   jobs: IJobUser[];
   companies: ICompany[];
}

export const JobList: FC<JobListProps> = ({ jobs, companies }) => {
   const [jobsState, setJobsState] = useState<IJobUser[]>([]);
   const [selectedId, setSelectedId] = useState<{
      id: string;
      type: string;
   } | null>(null);

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

   const getCompanyData = (id: string) => {
      let company = companies.filter((c) => c.id === id)[0];
      return {
         name: company.name,
         imageUrl: company.imageUrl,
      };
   };

   const jobsMapped = jobs.map((job) => {
      let companyJob = getCompanyData(job.companyId);
      job.companyName = companyJob.name;
      job.companyImageUrl = companyJob.imageUrl;

      return job;
   });

   const onPressApply = () => {
      alert('pressed Apply Button');
   };

   const onPressInfo = () => {
      alert('pressed Info Button');
   };

   useEffect(() => {
      setJobsState(jobsMapped);
   }, [jobs]);

   useEffect(() => {
      if (selectedId) {
         if (selectedId.type === 'apply') {
            onPressApply();
         } else if (selectedId.type === 'info') {
            onPressInfo();
         }
      }
   }, [selectedId]);

   return (
      <View style={styles.container}>
         <FlatList
            data={jobsState}
            maxToRenderPerBatch={3}
            removeClippedSubviews={false}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            renderItem={({ item: job }) => (
               <TouchableHighlight>
                  <View key={job.id} style={styles.itemContainer}>
                     <View style={styles.headContainer}>
                        <View style={styles.headLeftContainer}>
                           <Image
                              style={styles.imageContainer}
                              source={{
                                 uri: job.companyImageUrl,
                              }}
                              resizeMode="contain"
                           />
                           {isPublishToday(job.publishDate) && (
                              <Text style={styles.tagNew}>NEW!</Text>
                           )}
                        </View>
                        <View style={styles.headRightContainer}>
                           <View style={styles.companyAndDateContainer}>
                              <Text style={styles.companyNameText}>
                                 {job.companyName}
                              </Text>
                              <Text style={styles.dateText}>
                                 {formatDate(job.publishDate)}
                              </Text>
                           </View>
                           {/* <View style={styles.titleContainer}> */}
                           <Text style={styles.titleText}>{job.name}</Text>
                           {/* </View> */}
                        </View>
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
                              title="Apply!"
                              color="#FC552F"
                              onPress={() =>
                                 setSelectedId({
                                    id: job.id,
                                    type: 'apply',
                                 })
                              }
                           />
                           <ButtonSeparator />
                           <Button
                              title="INFO"
                              color="#38AA2F"
                              onPress={() =>
                                 setSelectedId({
                                    id: job.id,
                                    type: 'info',
                                 })
                              }
                           />
                        </View>
                        <Text style={styles.visitedText}>
                           {job.isVisited ? 'visited' : ''}
                        </Text>
                     </View>
                  </View>
               </TouchableHighlight>
            )}
         />
      </View>
   );
};

const ButtonSeparator = () => <View style={styles.buttonSeparator} />;

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
      borderRadius: 8,
      marginVertical: 5,
      marginHorizontal: 5,
   },
   headContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // padding: 3,
   },
   headLeftContainer: {
      // flex: 1,
      flexShrink: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // marginRight: 5,
      // padding: 3,
      width: 60,
      height: 60,
      maxWidth: 60,
      minWidth: 60,
      position: 'relative',
      // borderWidth: 1,
      // borderColor: '#A3A3A3',
   },
   headRightContainer: {
      flex: 1,
      flexGrow: 1,
      padding: 5,
      paddingLeft: 6,
   },
   imageContainer: {
      width: '100%',
      height: '100%',
   },
   companyAndDateContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
   },
   companyNameText: {
      // flex: 1,
      // flexGrow: 1,
      color: '#046B99',
      fontWeight: 'bold',
      paddingRight: 5,
   },
   dateText: {
      // flex: 1,
      // flexGrow: 0,
      // flexShrink: 1,
      textAlign: 'right',
      fontSize: 12,
      color: '#046B99',
      paddingRight: 3,
   },
   // titleContainer: {
   //    flexDirection: 'row',
   //    flexWrap: 'wrap',
   //    alignItems: 'center',
   // },
   tagNew: {
      backgroundColor: '#FF2424',
      color: '#FFF',
      fontSize: 10,
      fontWeight: 'bold',
      letterSpacing: 1,
      paddingVertical: 3,
      paddingHorizontal: 4,
      borderRadius: 3,
      position: 'absolute',
      top: -0,
      left: -7,
   },
   titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#222',
   },
   infoContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16,
      marginBottom: 2,
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
      marginTop: 3,
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
