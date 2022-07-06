import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { JobList } from './components/containers/JobList';

export default function App() {
   return (
      <View style={styles.container}>
         <JobList />
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
   },
});
