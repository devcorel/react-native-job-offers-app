import React from 'react';
import { StyleSheet, View } from 'react-native';
import { JobOffersScreen } from '../screens/JobOffersScreen';

export const MainLayout = () => {
   return (
      <View>
         <View></View>
         <View>
            <JobOffersScreen />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   mainLayoutContainer: {
      backgroundColor: 'red',
   },
});
