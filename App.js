import { StyleSheet, Text, View } from 'react-native';
import { FirebaseFetcher } from './FirebaseFetcher';


export default function App() {
  return (
    <View style={styles.container}>
      <FirebaseFetcher />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
