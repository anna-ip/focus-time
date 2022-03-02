import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Focus } from './src/feautures/focus/focus';
import { Timer } from './src/feautures/timer/Timer';
import { FocusHistory } from './src/feautures/focus/FocusHistory';

import { colors } from './src/utils/color';
import { spacing } from './src/utils/sizes';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};
const App = () => {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {currentSubject ? (
        <Timer
         focusSubject={currentSubject}
          onTimerEnd={(subject) =>{[...history, subject]}}
          clearSubject={() => {setCurrentSubject(null)}}
        />
      ) : (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
