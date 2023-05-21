/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import moment from 'moment';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const [time, setTime] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // format: 5/18   6:30 am
  const handleTime = () => {
    // let today = new Date();
    let time = moment().format('MM/DD  h:mm A');
    setTime(time);
    // let month = today.getMonth() + 1;
    // let date = today.getDate();
    // let hour = today.getHours();
    // let minutes = today.getMinutes();
  };

  return (
    <SafeAreaView style={{backgroundColor: 'dodgerblue', flex: 1}}>
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <View
          style={{
            backgroundColor: 'tomato',
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 30}}>Clin Clon App</Text>
        </View>
        <View style={{backgroundColor: 'gold', flex: 0.5}}>
          <Button title="View details" color="#000" />
        </View>
        <View style={{backgroundColor: 'green', flex: 1}}>
          <Button title="Record Time" color="#000" onPress={handleTime} />
          <Text style={{textAlign: 'center'}}>{time}</Text>
        </View>
      </View>
    </SafeAreaView>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <View
    //     style={{
    //       backgroundColor: 'dodgerblue',
    //       flex: 1,
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //     }}>
    //     <Text style={{color: '#006600', fontSize: 30}}>Clin Clon App</Text>
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
